const questionPool = [];
const PROGRESS_STORAGE_KEY = 'ccna2final-progress-v1';
const QUESTION_THEMES = [
    {
        key: 'vlan-intervlan',
        title: 'VLAN et routage inter-VLAN',
        description: 'VLAN, trunks, interfaces SVI et communication entre VLAN.',
        patterns: [/\bvlan\b|inter.?vlan|\bsvi\b|\btrunk\b|802\.1q|router.on.a.stick|sous.interface/]
    },
    {
        key: 'stp-etherchannel',
        title: 'STP et EtherChannel',
        description: 'Spanning Tree, pont racine, BPDU et agrégation de liens.',
        patterns: [/\bstp\b|\brstp\b|\bpvst\b|spanning.tree|\bbpdu\b|etherchannel|\blacp\b|\bpagp\b|port.channel|pont racine/]
    },
    {
        key: 'routing',
        title: 'Routage et passerelles',
        description: 'Routes statiques et dynamiques, routage IPv4/IPv6 et passerelles.',
        patterns: [/rout(?:e|age|eur|ing)|\bospf\b|\brip\b|\bhsrp\b|\bfhrp\b|passerelle|gateway|next.hop|troncon suivant|route par defaut|route statique|route dynamique/]
    },
    {
        key: 'dhcp-addressing',
        title: 'DHCP et adressage IP',
        description: 'DHCP, IPv4/IPv6, sous-réseaux et services d’adressage.',
        patterns: [/\bdhcp\b|\bipv[46]\b|adresse ip|sous.?reseau|masque|prefixe|adressage|\barp\b|\bdns\b|adresse mac/]
    },
    {
        key: 'wireless',
        title: 'Wi-Fi et WLAN',
        description: 'Réseaux sans fil, normes 802.11, points d’accès et contrôleurs.',
        patterns: [/wi.?fi|sans.fil|\bwlan\b|802\.11|point d.?acces|\bssid\b|wireless|\bwlc\b|controleur sans fil/]
    },
    {
        key: 'security',
        title: 'Sécurité réseau',
        description: 'Sécurité des ports, contrôle d’accès et protection du réseau.',
        patterns: [/securit|port.security|\bdai\b|\bipsg\b|dhcp snooping|\bacl\b|authentification|\bssh\b|attaque|mac flooding|bpdu guard/]
    },
    {
        key: 'switching-ethernet',
        title: 'Commutation et Ethernet',
        description: 'Commutateurs, trames, adresses MAC et caractéristiques Ethernet.',
        patterns: [/commutat|commutateur|\bswitch\b|trame|\bmac\b|couche 2|couche 3|duplex|bande passante|congestion|transmission|monodiffusion|diffusion|unicast|broadcast|multicast/]
    },
    {
        key: 'other',
        title: 'Autres notions réseau',
        description: 'Questions transversales qui ne relèvent pas d’un thème unique.',
        patterns: []
    }
];
let currentQuestions = [];
let currentAnswers = [];
let currentResults = [];
let currentQuestionIndex = 0;
let currentMode = 'end';
let currentSeriesSize = 40;
let currentThemeKey = null;
let currentQuizLabel = '';
let completed = false;

function shuffle(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function showDataError(message) {
    const error = document.createElement('p');
    error.className = 'data-error';
    error.setAttribute('role', 'alert');
    error.textContent = message;
    document.getElementById('menu-container').appendChild(error);
}

function setAutosaveStatus(message, isError = false) {
    ['autosave-status', 'quiz-save-status'].forEach(id => {
        const status = document.getElementById(id);
        status.textContent = message;
        status.classList.toggle('save-error', isError);
    });
}

function getAnsweredQuestionCount(questions, answers) {
    return questions.reduce((count, question, index) =>
        count + (isQuestionAnswerable(question)
            && answers[index] !== null
            && hasCompleteAnswer(question, answers[index]) ? 1 : 0), 0);
}

function getQuestionThemes(question) {
    const normalizeText = text => text.normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase();
    const prompt = normalizeText([
        question.question,
        ...(question.match_pairs || []).flatMap(pair => [pair.term, pair.definition])
    ].join(' '));
    const options = normalizeText((question.options || []).join(' '));
    const matches = QUESTION_THEMES.filter(theme => theme.key !== 'other'
        && theme.patterns.some(pattern => pattern.test(prompt))).map(theme => theme.key);
    if (matches.length) {
        return matches;
    }

    const optionMatches = QUESTION_THEMES.filter(theme => theme.key !== 'other'
        && theme.patterns.some(pattern => pattern.test(options))).map(theme => theme.key);
    if (optionMatches.length) {
        return optionMatches;
    }

    return ['other'];
}

function getNumberedSeries() {
    const questions = [...allQuestions].sort((first, second) => first.id - second.id);
    const series = [];
    for (let index = 0; index < questions.length; index += 10) {
        series.push(questions.slice(index, index + 10));
    }

    if (series.length > 1 && series[series.length - 1].length === 1) {
        series[series.length - 2].push(...series.pop());
    }
    return series;
}

function validateSavedProgress(progress) {
    if (!progress || progress.version !== 1
        || !['immediate', 'end'].includes(progress.mode)
        || !Array.isArray(progress.questionIds)
        || progress.questionIds.length !== progress.seriesSize
        || new Set(progress.questionIds).size !== progress.questionIds.length
        || !Array.isArray(progress.answers)
        || progress.answers.length !== progress.questionIds.length
        || !Array.isArray(progress.results)
        || progress.results.length !== progress.questionIds.length
        || !Number.isInteger(progress.questionIndex)
        || progress.questionIndex < 0
        || progress.questionIndex >= progress.questionIds.length
        || !Array.isArray(progress.remainingIds)) {
        return null;
    }

    const questionsById = new Map(allQuestions.map(question => [question.id, question]));
    const questions = progress.questionIds.map(id => questionsById.get(id));
    const remainingQuestions = progress.remainingIds.map(id => questionsById.get(id));
    const themeKey = progress.themeKey || null;
    const quizLabel = progress.quizLabel
        || `Série de ${progress.seriesSize} questions`;
    const validTheme = themeKey === null
        || QUESTION_THEMES.some(theme => theme.key === themeKey);
    const validSeriesSize = themeKey
        ? questions.length > 0
        : [10, 11, 40, 60].includes(progress.seriesSize);
    if (questions.some(question => !question)
        || remainingQuestions.some(question => !question)
        || !validTheme
        || !validSeriesSize
        || (progress.quizLabel !== undefined && typeof progress.quizLabel !== 'string')
        || new Set(progress.remainingIds).size !== progress.remainingIds.length
        || progress.remainingIds.some(id => progress.questionIds.includes(id))
        || (themeKey && questions.some(question =>
            !getQuestionThemes(question).includes(themeKey)))) {
        return null;
    }

    const validResults = progress.results.every(result =>
        result === null || typeof result === 'boolean' || result === 'skipped');
    const validAnswers = progress.answers.every((answer, index) => {
        if (answer === null) {
            return true;
        }
        if (!Array.isArray(answer)) {
            return false;
        }

        const question = questions[index];
        const isMatchQuestion = question.type === 'match'
            || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);
        return isMatchQuestion
            ? answer.length === question.match_pairs.length
                && answer.every(value => value === null
                    || (Number.isInteger(value) && value >= 0 && value < question.match_pairs.length))
            : answer.every(value => Number.isInteger(value)
                && value >= 0
                && value < question.options.length);
    });

    if (!validAnswers || !validResults) {
        return null;
    }

    return { ...progress, themeKey, quizLabel, questions, remainingQuestions };
}

function readSavedProgress() {
    let serialized;
    try {
        serialized = localStorage.getItem(PROGRESS_STORAGE_KEY);
    } catch (error) {
        setAutosaveStatus('La sauvegarde locale est inaccessible dans ce navigateur.', true);
        return null;
    }

    if (!serialized) {
        return null;
    }

    try {
        const progress = validateSavedProgress(JSON.parse(serialized));
        if (!progress) {
            setAutosaveStatus('La sauvegarde est invalide. Efface-la pour commencer une nouvelle série.', true);
        }
        return progress;
    } catch (error) {
        setAutosaveStatus('La sauvegarde est illisible. Efface-la pour commencer une nouvelle série.', true);
        return null;
    }
}

function renderSavedProgress() {
    const panel = document.getElementById('resume-panel');
    const progress = readSavedProgress();
    if (!progress) {
        let hasSavedData = false;
        try {
            hasSavedData = localStorage.getItem(PROGRESS_STORAGE_KEY) !== null;
        } catch (error) {
            setAutosaveStatus('La sauvegarde locale est inaccessible dans ce navigateur.', true);
        }
        document.getElementById('resume-btn').classList.add('hidden');
        document.getElementById('clear-progress-btn').classList.toggle('hidden', !hasSavedData);
        if (hasSavedData) {
            document.getElementById('resume-summary').textContent =
                'La sauvegarde est invalide et ne peut pas être reprise. Efface-la pour créer une nouvelle série.';
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
        return;
    }

    document.getElementById('resume-btn').classList.remove('hidden');
    document.getElementById('clear-progress-btn').classList.remove('hidden');
    const answered = getAnsweredQuestionCount(progress.questions, progress.answers);
    const percentage = Math.round((answered / progress.seriesSize) * 100);
    const savedAt = Number.isFinite(progress.savedAt)
        ? new Date(progress.savedAt).toLocaleString()
        : 'heure inconnue';
    document.getElementById('resume-summary').textContent =
        `${progress.quizLabel} · ${answered} réponse${answered > 1 ? 's' : ''} enregistrée${answered > 1 ? 's' : ''}. Question ${progress.questionIndex + 1} sur ${progress.seriesSize}. Dernière sauvegarde : ${savedAt}.`;
    document.getElementById('resume-progress-bar').value = percentage;
    panel.classList.remove('hidden');
}

function persistProgress() {
    if (!currentQuestions.length || completed) {
        return;
    }

    const progress = {
        version: 1,
        seriesSize: currentSeriesSize,
        mode: currentMode,
        themeKey: currentThemeKey,
        quizLabel: currentQuizLabel,
        questionIds: currentQuestions.map(question => question.id),
        remainingIds: questionPool.map(question => question.id),
        answers: currentAnswers,
        results: currentResults,
        questionIndex: currentQuestionIndex,
        savedAt: Date.now()
    };

    try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
        setAutosaveStatus('Progression sauvegardée automatiquement sur cet appareil.');
    } catch (error) {
        setAutosaveStatus('Impossible d’enregistrer la progression dans ce navigateur.', true);
    }
}

function clearSavedProgress(message = 'La sauvegarde de progression a été effacée.') {
    try {
        localStorage.removeItem(PROGRESS_STORAGE_KEY);
        document.getElementById('resume-panel').classList.add('hidden');
        document.getElementById('resume-btn').classList.remove('hidden');
        document.getElementById('clear-progress-btn').classList.remove('hidden');
        setAutosaveStatus(message);
    } catch (error) {
        setAutosaveStatus('Impossible d’effacer la sauvegarde dans ce navigateur.', true);
    }
}

function resumeQuiz() {
    const progress = readSavedProgress();
    if (!progress) {
        renderSavedProgress();
        return;
    }

    currentSeriesSize = progress.seriesSize;
    currentMode = progress.mode;
    currentThemeKey = progress.themeKey;
    currentQuizLabel = progress.quizLabel;
    currentQuestions = progress.questions;
    currentAnswers = progress.answers;
    currentResults = progress.results;
    currentQuestionIndex = progress.questionIndex;
    questionPool.splice(0, questionPool.length, ...progress.remainingQuestions);
    completed = false;

    document.getElementById('quiz-title').textContent =
        `${currentQuizLabel} — ${currentMode === 'immediate' ? 'correction au fur et à mesure' : 'correction à la fin'}`;
    document.getElementById('result-area').classList.add('hidden');
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('quiz-form').classList.remove('hidden');
    renderCurrentQuestion();
    setAutosaveStatus('Ta progression sauvegardée a été restaurée.');
    window.scrollTo(0, 0);
}

function drawQuestions(count) {
    if (questionPool.length >= count) {
        return questionPool.splice(0, count);
    }

    const questions = questionPool.splice(0, questionPool.length);
    const selectedIds = new Set(questions.map(question => question.id));
    const nextPass = shuffle(allQuestions.filter(question => !selectedIds.has(question.id)));
    questions.push(...nextPass.splice(0, count - questions.length));
    questionPool.push(...nextPass);
    return questions;
}

function renderNumberedSeries() {
    const container = document.getElementById('numbered-series-grid');
    getNumberedSeries().forEach((questions, index) => {
        const button = document.createElement('button');
        const title = `Série ${index + 1}`;
        button.type = 'button';
        button.className = 'numbered-series-button';
        button.textContent = `${title} · ${questions.length} questions`;
        button.addEventListener('click', () => {
            const mode = document.getElementById('series-mode-select').value;
            startQuiz(questions.length, mode, { questions, title });
        });
        container.appendChild(button);
    });
}

function renderThemedSeries() {
    const container = document.getElementById('themed-series-grid');
    const themedQuestions = new Map(QUESTION_THEMES.map(theme => [theme.key, []]));
    allQuestions.forEach(question => {
        getQuestionThemes(question).forEach(themeKey => themedQuestions.get(themeKey).push(question));
    });

    QUESTION_THEMES.forEach(theme => {
        const questions = themedQuestions.get(theme.key);
        if (!questions.length) {
            return;
        }

        const card = document.createElement('article');
        card.className = 'themed-series-card';
        const heading = document.createElement('h4');
        heading.textContent = theme.title;
        const description = document.createElement('p');
        description.textContent = `${theme.description} ${questions.length} questions.`;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-submit';
        button.textContent = 'Commencer ce thème';
        button.addEventListener('click', () => {
            const mode = document.getElementById('series-mode-select').value;
            startQuiz(questions.length, mode, {
                questions,
                title: `${theme.title} · ${questions.length} questions`,
                themeKey: theme.key
            });
        });
        card.append(heading, description, button);
        container.appendChild(card);
    });
}

function startQuiz(seriesSize, mode, selection = {}) {
    const requestedSize = Number(seriesSize);
    const hasFixedQuestions = Array.isArray(selection.questions);
    const validSelection = hasFixedQuestions
        ? selection.questions.length === requestedSize
            && requestedSize > 0
            && new Set(selection.questions.map(question => question.id)).size === requestedSize
            && selection.questions.every(question => allQuestions.some(item => item.id === question.id))
        : [10, 40, 60].includes(requestedSize);
    if (!validSelection || !['immediate', 'end'].includes(mode)) {
        showDataError('Le format de cette série n’est pas disponible.');
        return;
    }

    currentQuestions = hasFixedQuestions
        ? [...selection.questions]
        : drawQuestions(requestedSize);
    const selectedIds = new Set(currentQuestions.map(question => question.id));
    if (hasFixedQuestions) {
        questionPool.splice(0, questionPool.length,
            ...questionPool.filter(question => !selectedIds.has(question.id)));
    }
    currentSeriesSize = currentQuestions.length;
    currentMode = mode;
    currentThemeKey = selection.themeKey || null;
    currentQuizLabel = selection.title || `Série de ${currentSeriesSize} questions`;
    currentAnswers = Array(currentQuestions.length).fill(null);
    currentResults = currentQuestions.map(question =>
        isQuestionAnswerable(question) ? null : 'skipped'
    );
    currentQuestionIndex = 0;
    completed = false;

    document.getElementById('quiz-title').textContent =
        `${currentQuizLabel} — ${mode === 'immediate' ? 'correction au fur et à mesure' : 'correction à la fin'}`;
    document.getElementById('result-area').classList.add('hidden');
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('quiz-form').classList.remove('hidden');
    renderCurrentQuestion();
    persistProgress();
    window.scrollTo(0, 0);
}

function renderQuestion(question, questionIndex) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);
    const isAnswerable = isQuestionAnswerable(question);
    const images = Array.isArray(question.image)
        ? question.image
        : question.image
            ? [question.image]
            : [];
    const image = images.length
        ? `<div class="question-images">${images.map((src, imageIndex) => `
            <img class="question-image" src="${escapeHtml(src)}" alt="Illustration ${imageIndex + 1} de la question ${questionIndex + 1}" loading="lazy" referrerpolicy="no-referrer">
        `).join('')}</div>`
        : '';
    const answerContent = isMatchQuestion
        ? renderMatchOptions(question, questionIndex)
        : renderStandardOptions(question, questionIndex);
    const explanation = question.explanation
        ? `<div class="explanation-box">${escapeHtml(question.explanation)}</div>`
        : '';
    const answerWarning = isAnswerable
        ? ''
        : '<p class="data-error">Cette question n’a pas de réponses ou de corrigé dans la banque et sera exclue du score.</p>';

    return `
        <article class="q-card" data-index="${questionIndex}">
            <h3>${questionIndex + 1}. ${escapeHtml(question.question)}</h3>
            ${image}
            <div class="q-body">${answerContent}</div>
            ${answerWarning}
            ${explanation}
            <p class="question-error hidden" role="alert"></p>
        </article>
    `;
}

function renderStandardOptions(question, questionIndex) {
    if (!Array.isArray(question.options) || question.options.length === 0) {
        return '<p class="data-error">Aucune réponse n’est disponible pour cette question.</p>';
    }

    const correctAnswers = Array.isArray(question.correct) ? question.correct : [];
    const inputType = correctAnswers.length > 1 ? 'checkbox' : 'radio';

    return `<div class="options-list">${question.options.map((option, optionIndex) => `
        <label class="opt-item">
            <input type="${inputType}" name="question-${questionIndex}" value="${optionIndex}">
            <span>${escapeHtml(option)}</span>
        </label>
    `).join('')}</div>`;
}

function renderMatchOptions(question, questionIndex) {
    const pairs = question.match_pairs;
    if (!Array.isArray(pairs) || pairs.length === 0) {
        return '<p class="data-error">Aucune association n’est disponible pour cette question.</p>';
    }

    const choices = shuffle(pairs.map((pair, index) => ({ pair, index })));
    return `<div class="match-list">${pairs.map((pair, pairIndex) => `
        <label class="match-row" data-pair-index="${pairIndex}">
            <span>${escapeHtml(pair.definition)}</span>
            <select class="match-select" name="question-${questionIndex}-match-${pairIndex}">
                <option value="">Choisir une réponse</option>
                ${choices.map(choice => `
                    <option value="${choice.index}">${escapeHtml(choice.pair.term)}</option>
                `).join('')}
            </select>
        </label>
    `).join('')}</div>`;
}

function renderCurrentQuestion() {
    const container = document.getElementById('questions-container');
    const question = currentQuestions[currentQuestionIndex];
    container.innerHTML = renderQuestion(question, currentQuestionIndex);

    if (currentAnswers[currentQuestionIndex] !== null) {
        setQuestionAnswer(
            container.querySelector('.q-card'),
            question,
            currentQuestionIndex,
            currentAnswers[currentQuestionIndex]
        );
    }

    if (!isQuestionAnswerable(question)) {
        currentResults[currentQuestionIndex] = 'skipped';
        container.querySelectorAll('input, select').forEach(input => { input.disabled = true; });
    } else if (currentMode === 'immediate' && currentResults[currentQuestionIndex] !== null) {
        showQuestionResult(container.querySelector('.q-card'), question, currentQuestionIndex);
    }

    updateNavigation();
    const answered = getAnsweredQuestionCount(currentQuestions, currentAnswers);
    document.getElementById('question-progress').textContent =
        `Question ${currentQuestionIndex + 1} sur ${currentQuestions.length} · ${answered} réponse${answered > 1 ? 's' : ''} enregistrée${answered > 1 ? 's' : ''}`;
    document.getElementById('quiz-progress-bar').value =
        Math.round((answered / currentQuestions.length) * 100);
    window.scrollTo(0, 0);
}

function captureQuestionAnswer(card, question, questionIndex) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    if (isMatchQuestion) {
        return [...card.querySelectorAll('.match-select')].map(select =>
            select.value === '' ? null : Number(select.value)
        );
    }

    return [...card.querySelectorAll(`input[name="question-${questionIndex}"]:checked`)]
        .map(input => Number(input.value));
}

function setQuestionAnswer(card, question, questionIndex, answer) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    if (isMatchQuestion) {
        card.querySelectorAll('.match-select').forEach((select, index) => {
            select.value = answer[index] === null ? '' : String(answer[index]);
        });
        return;
    }

    const selected = new Set(answer);
    card.querySelectorAll(`input[name="question-${questionIndex}"]`).forEach(input => {
        input.checked = selected.has(Number(input.value));
    });
}

function hasCompleteAnswer(question, answer) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    return isMatchQuestion
        ? answer.length > 0 && answer.every(value => value !== null)
        : answer.length > 0;
}

function isQuestionAnswerable(question) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    if (isMatchQuestion) {
        return Array.isArray(question.match_pairs) && question.match_pairs.length > 0;
    }

    return Array.isArray(question.options)
        && question.options.length > 0
        && Array.isArray(question.correct)
        && question.correct.length > 0
        && question.correct.every(index => Number.isInteger(index)
            && index >= 0
            && index < question.options.length);
}

function isAnswerCorrect(question, answer) {
    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    if (isMatchQuestion) {
        return Array.isArray(question.match_pairs)
            && question.match_pairs.length > 0
            && answer.length === question.match_pairs.length
            && answer.every((value, index) => value === index);
    }

    const expected = new Set(Array.isArray(question.correct) ? question.correct : []);
    const selected = new Set(answer);
    return expected.size > 0
        && expected.size === selected.size
        && [...expected].every(value => selected.has(value));
}

function showQuestionResult(card, question, questionIndex) {
    if (!isQuestionAnswerable(question)) {
        card.querySelectorAll('input, select').forEach(input => { input.disabled = true; });
        return;
    }

    const isMatchQuestion = question.type === 'match'
        || (Array.isArray(question.match_pairs) && question.match_pairs.length > 0);

    if (isMatchQuestion) {
        card.querySelectorAll('.match-row').forEach(row => {
            const pairIndex = Number(row.dataset.pairIndex);
            row.classList.add(currentAnswers[questionIndex][pairIndex] === pairIndex
                ? 'correct-highlight'
                : 'wrong-highlight');
        });
    } else {
        const expected = new Set(Array.isArray(question.correct) ? question.correct : []);
        const selected = new Set(currentAnswers[questionIndex]);
        card.querySelectorAll(`input[name="question-${questionIndex}"]`).forEach(input => {
            const index = Number(input.value);
            const label = input.closest('.opt-item');
            if (expected.has(index)) {
                label.classList.add(selected.has(index) ? 'correct-highlight' : 'missed-highlight');
            } else if (selected.has(index)) {
                label.classList.add('wrong-highlight');
            }
        });
    }

    card.querySelectorAll('input, select').forEach(input => { input.disabled = true; });
    const explanation = card.querySelector('.explanation-box');
    if (explanation) {
        explanation.classList.add('visible');
    }
}

function verifyCurrentQuestion() {
    const card = document.querySelector('.q-card');
    const question = currentQuestions[currentQuestionIndex];
    if (!isQuestionAnswerable(question)) {
        currentResults[currentQuestionIndex] = 'skipped';
        updateNavigation();
        return;
    }

    const answer = captureQuestionAnswer(card, question, currentQuestionIndex);
    const error = card.querySelector('.question-error');

    if (!hasCompleteAnswer(question, answer)) {
        error.textContent = 'Réponds à la question avant de vérifier.';
        error.classList.remove('hidden');
        return;
    }

    error.classList.add('hidden');
    currentAnswers[currentQuestionIndex] = answer;
    currentResults[currentQuestionIndex] = isAnswerCorrect(question, answer);
    showQuestionResult(card, question, currentQuestionIndex);
    updateNavigation();
    persistProgress();
}

function saveCurrentAnswer() {
    const card = document.querySelector('.q-card');
    if (card) {
        currentAnswers[currentQuestionIndex] =
            captureQuestionAnswer(card, currentQuestions[currentQuestionIndex], currentQuestionIndex);
    }
}

function updateNavigation() {
    const isImmediate = currentMode === 'immediate';
    const hasResult = currentResults[currentQuestionIndex] !== null;
    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    const previousButton = document.getElementById('previous-btn');
    const verifyButton = document.getElementById('verify-btn');
    const nextButton = document.getElementById('next-btn');
    const finishButton = document.getElementById('submit-btn');

    previousButton.classList.toggle('hidden', isImmediate || completed);
    previousButton.disabled = currentQuestionIndex === 0;
    verifyButton.classList.toggle('hidden', !isImmediate || hasResult || completed);
    nextButton.classList.toggle('hidden', completed || (!isImmediate && isLastQuestion));
    nextButton.textContent = isImmediate && isLastQuestion ? 'Voir mon score' : 'Question suivante';
    finishButton.classList.toggle('hidden', completed || isImmediate || !isLastQuestion);
}

function moveNext() {
    if (currentMode === 'immediate' && currentResults[currentQuestionIndex] === null) {
        verifyCurrentQuestion();
        return;
    }

    if (currentMode === 'end') {
        saveCurrentAnswer();
    }
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        persistProgress();
    } else {
        showFinalResults();
    }
}

function movePrevious() {
    saveCurrentAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        persistProgress();
    }
}

function finishQuiz() {
    saveCurrentAnswer();
    const unanswered = currentAnswers.findIndex((answer, index) =>
        isQuestionAnswerable(currentQuestions[index])
            && !hasCompleteAnswer(currentQuestions[index], answer)
    );

    if (unanswered !== -1) {
        currentQuestionIndex = unanswered;
        renderCurrentQuestion();
        persistProgress();
        const error = document.querySelector('.question-error');
        error.textContent = 'Réponds à toutes les questions avant de terminer.';
        error.classList.remove('hidden');
        return;
    }

    showFinalResults();
}

function showFinalResults() {
    if (currentMode === 'end') {
        currentResults = currentQuestions.map((question, index) =>
            isQuestionAnswerable(question)
                ? isAnswerCorrect(question, currentAnswers[index])
                : 'skipped'
        );

        document.getElementById('questions-container').innerHTML = currentQuestions
            .map(renderQuestion)
            .join('');
        document.querySelectorAll('.q-card').forEach((card, index) => {
            const question = currentQuestions[index];
            if (isQuestionAnswerable(question)) {
                setQuestionAnswer(card, question, index, currentAnswers[index]);
            }
            showQuestionResult(card, question, index);
        });
    }

    completed = true;
    clearSavedProgress('Série terminée : ta progression a été enregistrée dans le résultat affiché.');
    const score = currentResults.filter(result => result === true).length;
    const scoredQuestions = currentResults.filter(result => result !== 'skipped').length;
    const skippedQuestions = currentResults.length - scoredQuestions;
    document.getElementById('score-val').textContent = score;
    document.getElementById('total-val').textContent = scoredQuestions;
    document.getElementById('result-msg').textContent =
        `${getResultMessage(score, scoredQuestions)}${skippedQuestions > 0
            ? ` ${skippedQuestions} question${skippedQuestions > 1 ? 's' : ''} sans corrigé exclue${skippedQuestions > 1 ? 's' : ''} du score.`
            : ''}`;
    document.getElementById('result-area').classList.remove('hidden');
    document.getElementById('previous-btn').classList.add('hidden');
    document.getElementById('verify-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('result-area').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function getResultMessage(score, total) {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    if (percentage < 50) {
        return 'N’hésite pas à revoir le cours et à réessayer.';
    }
    if (percentage < 80) {
        return 'Bon travail, continue ainsi !';
    }
    return 'Excellent résultat !';
}

function showMenu() {
    if (!completed) {
        saveCurrentAnswer();
        persistProgress();
    }

    document.getElementById('quiz-form').classList.add('hidden');
    document.getElementById('menu-container').classList.remove('hidden');
    document.getElementById('questions-container').innerHTML = '';
    document.getElementById('result-area').classList.add('hidden');
    currentQuestions = [];
    currentAnswers = [];
    currentResults = [];
    completed = false;
    renderSavedProgress();
    window.scrollTo(0, 0);
}

function selectSeriesTab(selectedTab) {
    document.querySelectorAll('[data-series-tab]').forEach(tab => {
        const isSelected = tab.dataset.seriesTab === selectedTab;
        tab.classList.toggle('active', isSelected);
        tab.setAttribute('aria-selected', String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
    });

    document.getElementById('panel-long-series').classList.toggle('hidden', selectedTab !== 'long');
    document.getElementById('panel-short-series').classList.toggle('hidden', selectedTab !== 'short');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof allQuestions === 'undefined' || !Array.isArray(allQuestions)) {
        showDataError('Le fichier de questions est introuvable ou invalide.');
        return;
    }

    questionPool.push(...shuffle(allQuestions));
    document.getElementById('question-bank-note').textContent =
        `${allQuestions.length} questions disponibles. Les séries parcourent la banque sans répétition avant un nouveau tour.`;
    renderNumberedSeries();
    renderThemedSeries();

    document.querySelectorAll('[data-series-tab]').forEach((tab, index, tabs) => {
        tab.tabIndex = index === 0 ? 0 : -1;
        tab.addEventListener('click', () => selectSeriesTab(tab.dataset.seriesTab));
        tab.addEventListener('keydown', event => {
            const currentIndex = [...tabs].indexOf(tab);
            let nextIndex;
            if (event.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % tabs.length;
            } else if (event.key === 'ArrowLeft') {
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = tabs.length - 1;
            }
            if (nextIndex !== undefined) {
                event.preventDefault();
                tabs[nextIndex].focus();
                selectSeriesTab(tabs[nextIndex].dataset.seriesTab);
            }
        });
    });
    document.querySelectorAll('.format-option').forEach(button => {
        button.addEventListener('click', () =>
            startQuiz(button.dataset.size, button.dataset.mode)
        );
    });
    document.getElementById('previous-btn').addEventListener('click', movePrevious);
    document.getElementById('verify-btn').addEventListener('click', verifyCurrentQuestion);
    document.getElementById('next-btn').addEventListener('click', moveNext);
    document.getElementById('submit-btn').addEventListener('click', finishQuiz);
    document.getElementById('resume-btn').addEventListener('click', resumeQuiz);
    document.getElementById('clear-progress-btn').addEventListener('click', () => clearSavedProgress());
    document.getElementById('questions-container').addEventListener('change', () => {
        saveCurrentAnswer();
        persistProgress();
    });
    renderSavedProgress();
});
