const runesJSON = [
  {
    name: "El",
    image: "images/El.gif",
    weapons: "+50 To Attack Rating, +1 Light Radius",
    armor: "+15 Defense, +1 To Light Radius",
    level: 11,
  },
  {
    name: "Eld",
    image: "images/Eld.gif",
    weapons: "+75% Damage To Undead, +50 Attack Rating Against Undead",
    armor: "15% Slower Stamina Drain/7% Increased Chance of Blocking (Shields)",
    level: 11,
  },
  {
    name: "Tir",
    image: "images/Tir.gif",
    weapons: "2 To Mana After Each Kill",
    armor: "2 To Mana After Each Kill",
    level: 13,
  },
  {
    name: "Nef",
    image: "images/Nef.gif",
    weapons: "Knockback",
    armor: "+30 Defense Vs. Missile",
    level: 13,
  },
  {
    name: "Eth",
    image: "images/Eth.gif",
    weapons: "-25% To Target Defense",
    armor: "Regenerate Mana 15%",
    level: 15,
  },
  {
    name: "Ith",
    image: "images/Ith.gif",
    weapons: "+9 To Maximum Damage",
    armor: "15% Damage Taken Goes to Mana",
    level: 15,
  },
  {
    name: "Tal",
    image: "images/Tal.gif",
    weapons: "+75 Poison Damage Over 5 Seconds",
    armor: "Poison Resist 30%/Poison Resist 35% (Shields)",
    level: 17,
  },
  {
    name: "Ral",
    image: "images/Ral.gif",
    weapons: "5-30 Fire Damage",
    armor: "Fire Resist 30%/Fire Resist 35% (Shields)",
    level: 19,
  },
  {
    name: "Ort",
    image: "images/Ort.gif",
    weapons: "Adds 1-50 Lightning Damage",
    armor: "Lightning Resist 30%/Lightning Resist 35% (Shields)",
    level: 21,
  },
  {
    name: "Thul",
    image: "images/Thul.gif",
    weapons: "Adds 3-14 Cold Damage - 3 Second Duration",
    armor: "Cold Resist 30%/Cold Resist 35% (Shields)",
    level: 23,
  },
  {
    name: "Amn",
    image: "images/Amn.gif",
    weapons: "7% Life Stolen Per Hit",
    armor: "Attacker Takes Damage of 14",
    level: 25,
  },
  {
    name: "Sol",
    image: "images/Sol.gif",
    weapons: "+9 To Minimum Damage",
    armor: "Damage Reduced By 7",
    level: 27,
  },
  {
    name: "Shael",
    image: "images/Shael.gif",
    weapons: "20% Increased Attack Speed",
    armor: "20% Faster Hit Recovery/20% Faster Block Rate (Shields)",
    level: 29,
  },
  {
    name: "Dol",
    image: "images/Dol.gif",
    weapons: "Hit Causes Monster To Flee 25%",
    armor: "Replenish Life +7",
    level: 31,
  },
  {
    name: "Hel",
    image: "images/Hel.gif",
    weapons: "Requirements -20%",
    armor: "Requirements -15%",
    level: 33,
  },
  {
    name: "Io",
    image: "images/Io.gif",
    weapons: "+10 To Vitality",
    armor: "+10 To Vitality",
    level: 35,
  },
  {
    name: "Lum",
    image: "images/Lum.gif",
    weapons: "+10 To Energy",
    armor: "+10 To Energy",
    level: 37,
  },
  {
    name: "Ko",
    image: "images/Ko.gif",
    weapons: "+10 To Dexterity",
    armor: "+10 To Dexterity",
    level: 39,
  },
  {
    name: "Fal",
    image: "images/fal.gif",
    weapons: "+10 To Strength",
    armor: "+10 To Strength",
    level: 41,
  },
  {
    name: "Lem",
    image: "images/Lem.gif",
    weapons: "75% Extra Gold From Monsters",
    armor: "50% Extra Gold From Monsters",
    level: 43,
  },
  {
    name: "Pul",
    image: "images/Pul.gif",
    weapons: "+75% Damage To Demons, +100 Attack Rating Against Demon",
    armor: "+30% Enhanced Defense",
    level: 45,
  },
  {
    name: "Um",
    image: "images/Um.gif",
    weapons: "25% Chance of Open Wounds",
    armor: "All Resistances +15 (Armor/Helms) +22 (Shields)",
    level: 47,
  },
  {
    name: "Mal",
    image: "images/Mal.gif",
    weapons: "Prevent Monster Heal",
    armor: "Magic Damage Reduced By 7",
    level: 49,
  },
  {
    name: "Ist",
    image: "images/Ist.gif",
    weapons: "30% Better Chance of Getting Magic Items",
    armor: "25% Better Chance of Getting Magic Items",
    level: 51,
  },
  {
    name: "Gul",
    image: "images/Gul.gif",
    weapons: "20% Bonus To Attack Rating",
    armor: "5% To Maximum Poison Resist",
    level: 53,
  },
  {
    name: "Vex",
    image: "images/Vex.gif",
    weapons: "7% Mana Stolen Per Hit",
    armor: "5% To Maximum Fire Resist",
    level: 55,
  },
  {
    name: "Ohm",
    image: "images/Ohm.gif",
    weapons: "+50% Enhanced Damage",
    armor: "5% To Maximum Cold Resist",
    level: 57,
  },
  {
    name: "Lo",
    image: "images/Lo.gif",
    weapons: "20% Deadly Strike",
    armor: "5% To Maximum Lightning Resist",
    level: 59,
  },
  {
    name: "Sur",
    image: "images/Sur.gif",
    weapons: "Hit Blinds Target",
    armor: "Maximum Mana 5%/+50 To Mana (Shields)",
    level: 61,
  },

  {
    name: "Ber",
    image: "images/Ber.gif",
    weapons: "20% Chance of Crushing Blow",
    armor: "Damage Reduced by 8%",
    level: 63,
  },

  {
    name: "Jah",
    image: "images/Jah.gif",
    weapons: "Ignore Target's Defense",
    armor: "Increase Maximum Life 5%/+50 Life (Shields)",
    level: 65,
  },
  {
    name: "Cham",
    image: "images/Cham.gif",
    weapons: "Freeze Target +3",
    armor: "Cannot Be Frozen",
    level: 67,
  },
  {
    name: "Zod",
    image: "images/Zod.gif",
    weapons: "Indestructible",
    armor: "Indestructible",
    level: 69,
  },
];

let runes = document.querySelectorAll(".rune");

function initTooltip(target, data) {
  let imgURI = "";
  if (data && typeof data === "object") {
    imgURI = data.image;
  } else {
    imgURI = target.getAttribute("src");
  }
  target.addEventListener("mouseover", (event) => {
    // создаем DOM Element div
    let tooltipDiv = document.createElement("div");
    // даем ему аттрибут data-source
    tooltipDiv.setAttribute("data-source", `rune_${imgURI}`);
    // даем ему класс toooltip
    tooltipDiv.classList.add("tooltip");

    let content = "";
    if (data && typeof data === "object") {
      content += `<p>${data.name}</p>`;
      content += `<br>Weapon:<br>${data.weapons}`; // <br> === <br /> === <br></br>
      content += `<br>Armor:<br>${data.armor}`;
      content += `<br>Rec Level:${data.level}`;
    } else {
      const runeName = target.getAttribute("alt");
      const runeData = runesJSON.find((item) => item.name === runeName);
      if (runeData) {
        content += `<p>${runeData.name}</p>`;
        content += `<br>Weapon:<br>${runeData.weapons}`;
        content += `<br>Armor:<br>${runeData.armor}`;
        content += `<br>Rec Level:${runeData.level}`;
      } else {
        // достаем строку из аттрибута alt картинки руны
        content = target.getAttribute("alt");
        // заменяем разделители на html элементы перехода строки
        content = content + target.getAttribute("data-tooltip");
      }
    }
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
  target.addEventListener("mousemove", (event) => {
    let tooltipDiv = document.querySelector(`[data-source="rune_${imgURI}"]`);
    tooltipDiv.style.left = `${
      event.pageX - tooltipDiv.getBoundingClientRect().width / 2
    }px`;
    tooltipDiv.style.top = `${event.pageY + 25}px`;
  });
  target.addEventListener("mouseout", (event) => {
    // удаляем наш div тултипа
    document.querySelector(`[data-source="rune_${imgURI}"]`).remove();
  });
}

runes.forEach(initTooltip);

const columns = ["image", "name", "weapons", "armor", "level"];

function initRunes() {
  const rootEl = document.getElementById("runeListHeader");
  runesJSON.forEach((rune) => {
    const rowEl = document.createElement("tr");
    columns.forEach((field) => {
      const columnEl = document.createElement("td");
      if (field === "image") {
        const runeImgEl = document.createElement("img");
        runeImgEl.setAttribute("src", rune.image);
        columnEl.appendChild(runeImgEl);
        initTooltip(runeImgEl, rune);
      } else {
        columnEl.innerText = rune[field];
      }
      rowEl.appendChild(columnEl);
    });
    rootEl.appendChild(rowEl);
  });
}
initRunes();

// инициализация
// runeListHeader
