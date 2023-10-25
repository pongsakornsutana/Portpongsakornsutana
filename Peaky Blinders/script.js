const quotes = [
    {
        text: "ความรักไม่ใช่การกัดกร่อนกัน เราเป็นอิสระที่จับมือกันในการเดินทางของชีวิต",
        author: "คิลเลียน เมอร์ฟี"
    },
    {
        text: "การปั่นป่วนในสายตา ไม่มีคุณค่า ถ้าหัวใจยังคงหายใจได้สบาย",
        author: "คิลเลียน เมอร์ฟี"
    },
    // เพิ่มคำคมเพิ่มเติมตรงนี้
];

const quoteContainer = document.getElementById('quote-container');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteCard = document.createElement('div');
    quoteCard.classList.add('quote-card');
    quoteCard.innerHTML = `
        <p class="quote-text">${quote.text}</p>
        <p class="author">- ${quote.author}</p>
    `;
    quoteContainer.innerHTML = '';
    quoteContainer.appendChild(quoteCard);
}

// เรียกใช้ generateQuote เมื่อหน้าเว็บโหลดเสร็จ
generateQuote();


