import q7 from './assets/q7.png'

const questions = [
    {
        questionText: '1 - Qual das afirmativas é a correta sobre a Membrana Plasmática?',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Sua estrutura molecular é composta por lipídios e proteínas', isCorrect: true },
            { answerText: 'Os fosfolipídios possuem uma região hidrofílica, que fica voltado para o meio não aquoso.', isCorrect: false },
            { answerText: 'O colesterol é um lipídio presente na Membrana Plasmática das células vegetais e animais', isCorrect: false },
        ],
    },
    {
        questionText: '2 - Qual o revestimento que as células animais possuem que auxilia na adesão e nas respostas a corpos estranhos, como as células de um órgão transplantado?',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Interdigitações', isCorrect: false },
            { answerText: 'Membrana celulósica', isCorrect: false },
            { answerText: 'Glicocálix', isCorrect: true },
            { answerText: 'Microvilosidades', isCorrect: false },
            { answerText: 'Desmossomos', isCorrect: false },
        ],
    },
    {
        questionText: '3 - Marque a alternativa que não apresenta função na membrana plasmática:',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Delimitação do conteúdo extracelular e intracelular', isCorrect: false },
            { answerText: 'Respiração celular e produção de energia', isCorrect: true },
            { answerText: 'Controle da entrada e saída de substâncias da célula', isCorrect: false },
            { answerText: 'Reconhecimento de substâncias', isCorrect: false },
            { answerText: 'Proteção das estruturas internas da célula', isCorrect: false },
        ],
    },
    {
        questionText: '4 - A membrana plasmática é composta por vários componentes. Identifique qual componente não faz parte dela:',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Colesterol', isCorrect: false },
            { answerText: 'Fosfolipídios', isCorrect: false },
            { answerText: 'Proteínas', isCorrect: false },
            { answerText: 'Citosol ', isCorrect: true },
        ],
    },
    {
        questionText: '5 - Sobre as moléculas anfipáticas presente na membrana, marque a alternativa correta:',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Hidrofílica, parte polar, com o fósforo e hidrofóbica, parte apolar, com os lipídios', isCorrect: false },
            { answerText: 'Hidrofílica, parte apolar, com o grupo fosfato e hidrofóbica, parte polar, com as cadeias de hidrocarbonetos', isCorrect: false },
            { answerText: 'Hidrofílica, parte polar, com o grupo fosfato e hidrofóbica, parte apolar, com os aminoácidos', isCorrect: false },
            { answerText: 'Hidrofílica, parte polar, com o grupo fosfato e hidrofóbica, parte apolar, com as “caudas” longas de ácidos graxos', isCorrect: true },
            { answerText: 'Hidrofílica, parte apolar, com o radical hidroxila e hidrofóbica, parte polar, com carboidratos incorporados', isCorrect: false },
        ],
    },
    {
        questionText: '6 - Assim como os lipídios, as proteínas também podem girar em torno de seus próprios eixos e se deslocar lateralmente no plano da dupla camada. Qual o nome dado a essa propriedade dinâmica das membranas?',
        questionImgUrl: '',
        
        answerOptions: [
            { answerText: 'Modelo de Singer e Nicolson', isCorrect: false },
            { answerText: 'Modelo da bicamada lipídica', isCorrect: false },
            { answerText: 'Modelo da membrana de Singer', isCorrect: false },
            { answerText: 'Modelo iceberg', isCorrect: false },
            { answerText: 'Modelo do mosaico fluido', isCorrect: true },
        ],
    },
    {
        questionText: '7 - Indique corretamente os nomes das moléculas abaixo:',
        questionImgUrl: q7,
        answerOptions: [
            { answerText: '1- Proteína; 2- lipídio; 3- carboidrato', isCorrect: false },
            { answerText: '1- Lipídio; 2- carboidrato; 3- aminoácido', isCorrect: false },
            { answerText: '1- Proteínas; 2- lipídio; 3- glicose', isCorrect: false },
            { answerText: '1- Carboidrato; 2- lipídio; 3- proteína', isCorrect: true },
            { answerText: '1- Aminoácido; 2- carboidrato; 3- proteína', isCorrect: false },
        ],
    },
    {
        questionText: '8 - O transporte de substâncias pela membrana plasmática pode ser ativo ou passivo. Todos os exemplos a seguir são de transporte passivo, exceto:',
        questionImgUrl: '',
        answerOptions: [
            { answerText: 'Osmose', isCorrect: false },
            { answerText: 'Bomba de sódio e potássio', isCorrect: true },
            { answerText: 'Difusão facilitada', isCorrect: false },
            { answerText: 'Difusão simples', isCorrect: false },
        ],
    },
];

export default questions;