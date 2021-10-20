let runes = document.querySelectorAll(".rune");

runes.forEach((rune) => {
  rune.addEventListener("mouseover", (event) => {
    // создаем DOM Element div
    let tooltipDiv = document.createElement("div");
    // даем ему аттрибут data-source
    tooltipDiv.setAttribute(
      "data-source",
      `rune_${rune.getAttribute("src")}`
    );
    // даем ему класс toooltip
    tooltipDiv.classList.add("tooltip");
    // достаем строку из аттрибута alt картинки руны
    let content = rune.getAttribute("alt");
    // заменяем разделители на html элементы перехода строки
    content = content + rune.getAttribute("data-tooltip");
    // кладем в div получившуюся html строку
    tooltipDiv.innerHTML = content;
    // добавляем к body наш div элемент
    document.body.appendChild(tooltipDiv);
    // добавляем к стилям div элемента свойства left и top для установки нужного положения на странице
    tooltipDiv.style.left = `${
      event.pageX - tooltipDiv.getBoundingClientRect().width / 2
    }px`;
    tooltipDiv.style.top = `${event.pageY + 25}px`;
  });
  rune.addEventListener("mousemove", (event) => {
    let tooltipDiv = document.querySelector(
      `[data-source="rune_${rune.getAttribute("src")}"]`
    );
    tooltipDiv.style.left = `${
      event.pageX - tooltipDiv.getBoundingClientRect().width / 2
    }px`;
    tooltipDiv.style.top = `${event.pageY + 25}px`;
  });
  rune.addEventListener("mouseout", (event) => {
    // удаляем наш div тултипа
    document
      .querySelector(`[data-source="rune_${rune.getAttribute("src")}"]`)
      .remove();
  });
});


