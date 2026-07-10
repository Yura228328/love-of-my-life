document.addEventListener('DOMContentLoaded', () => {
   // Настройки наблюдателя
   const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Элемент начнет появляться, когда 20% его высоты покажется на экране
   };

   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            // Добавляем класс show, чтобы запустить CSS анимацию
            entry.target.classList.add('show');
            // Прекращаем наблюдение, чтобы анимация проигралась только один раз
            observer.unobserve(entry.target);
         }
      });
   }, observerOptions);

   // Находим все скрытые элементы и вешаем на них наблюдатель
   const hiddenElements = document.querySelectorAll('.hidden');
   hiddenElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
   const observerOptions = {
      threshold: 0.1
   };

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('show');
         }
      });
   }, observerOptions);

   const hiddenElements = document.querySelectorAll('.hidden');
   hiddenElements.forEach(el => observer.observe(el));
});

// --- Логика секретной страницы ---
const secretInput = document.getElementById('secretInput');
const secretBtn = document.getElementById('secretBtn');
const secretError = document.getElementById('secretError');

// ТВОЙ СЕКРЕТНЫЙ КОД (ЗАМЕНИ НА СВОЙ)
// Убедись, что пишешь его в кавычках
const CORRECT_CODE = "302246";

if (secretBtn && secretInput) {
   const checkCode = () => {
      // Получаем введенное значение, убираем лишние пробелы по краям
      const enteredCode = secretInput.value.trim();

      // .toLowerCase() позволяет сделать так, чтобы код срабатывал 
      // независимо от того, большими или маленькими буквами он введен
      if (enteredCode.toLowerCase() === CORRECT_CODE.toLowerCase()) {
         // Если код верный, перенаправляем на страницу письма
         window.location.href = "letter.html";
      } else {
         // Если неверный, показываем ошибку и трясем поле
         secretError.classList.add('show-error');
         secretInput.classList.add('shake');

         // Убираем тряску через полсекунды, чтобы анимация могла сработать снова
         setTimeout(() => {
            secretInput.classList.remove('shake');
         }, 500);
      }
   };

   // Проверка при клике на кнопку
   secretBtn.addEventListener('click', checkCode);

   // Проверка при нажатии клавиши Enter в поле ввода
   secretInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
         checkCode();
      }
   });

   // Скрываем ошибку, как только девушка начинает вводить новый код
   secretInput.addEventListener('input', () => {
      secretError.classList.remove('show-error');
      secretInput.classList.remove('shake');
   });
}