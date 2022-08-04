const runes = [
  {
    id: "01",
    name: "El",
    image: "images/El.gif",
    weapons: "+50 To Attack Rating, +1 Light Radius",
    armor: "+15 Defense, +1 To Light Radius",
    level: 11,
  },
  {
    id: "02",
    name: "Eld",
    image: "images/Eld.gif",
    weapons: "+75% Damage To Undead, +50 Attack Rating Against Undead",
    armor: "15% Slower Stamina Drain/7% Increased Chance of Blocking (Shields)",
    level: 11,
  },
  {
    id: "03",
    name: "Tir",
    image: "images/Tir.gif",
    weapons: "2 To Mana After Each Kill",
    armor: "2 To Mana After Each Kill",
    level: 13,
  },
  {
    id: "04",
    name: "Nef",
    image: "images/Nef.gif",
    weapons: "Knockback",
    armor: "+30 Defense Vs. Missile",
    level: 13,
  },
  {
    id: "05",
    name: "Eth",
    image: "images/Eth.gif",
    weapons: "-25% To Target Defense",
    armor: "Regenerate Mana 15%",
    level: 15,
  },
  {
    id: "06",
    name: "Ith",
    image: "images/Ith.gif",
    weapons: "+9 To Maximum Damage",
    armor: "15% Damage Taken Goes to Mana",
    level: 15,
  },
  {
    id: "07",
    name: "Tal",
    image: "images/Tal.gif",
    weapons: "+75 Poison Damage Over 5 Seconds",
    armor: "Poison Resist 30%/Poison Resist 35% (Shields)",
    level: 17,
  },
  {
    id: "08",
    name: "Ral",
    image: "images/Ral.gif",
    weapons: "5-30 Fire Damage",
    armor: "Fire Resist 30%/Fire Resist 35% (Shields)",
    level: 19,
  },
  {
    id: "09",
    name: "Ort",
    image: "images/Ort.gif",
    weapons: "Adds 1-50 Lightning Damage",
    armor: "Lightning Resist 30%/Lightning Resist 35% (Shields)",
    level: 21,
  },
  {
    id: "010",
    name: "Thul",
    image: "images/Thul.gif",
    weapons: "Adds 3-14 Cold Damage - 3 Second Duration",
    armor: "Cold Resist 30%/Cold Resist 35% (Shields)",
    level: 23,
  },
  {
    id: "011",
    name: "Amn",
    image: "images/Amn.gif",
    weapons: "7% Life Stolen Per Hit",
    armor: "Attacker Takes Damage of 14",
    level: 25,
  },
  {
    id: "012",
    name: "Sol",
    image: "images/Sol.gif",
    weapons: "+9 To Minimum Damage",
    armor: "Damage Reduced By 7",
    level: 27,
  },
  {
    id: "013",
    name: "Shael",
    image: "images/Shael.gif",
    weapons: "20% Increased Attack Speed",
    armor: "20% Faster Hit Recovery/20% Faster Block Rate (Shields)",
    level: 29,
  },
  {
    id: "014",
    name: "Dol",
    image: "images/Dol.gif",
    weapons: "Hit Causes Monster To Flee 25%",
    armor: "Replenish Life +7",
    level: 31,
  },
  {
    id: "015",
    name: "Hel",
    image: "images/Hel.gif",
    weapons: "Requirements -20%",
    armor: "Requirements -15%",
    level: 33,
  },
  {
    id: "016",
    name: "Io",
    image: "images/Io.gif",
    weapons: "+10 To Vitality",
    armor: "+10 To Vitality",
    level: 35,
  },
  {
    id: "017",
    name: "Lum",
    image: "images/Lum.gif",
    weapons: "+10 To Energy",
    armor: "+10 To Energy",
    level: 37,
  },
  {
    id: "018",
    name: "Ko",
    image: "images/Ko.gif",
    weapons: "+10 To Dexterity",
    armor: "+10 To Dexterity",
    level: 39,
  },
  {
    id: "019",
    name: "Fal",
    image: "images/Fal.gif",
    weapons: "+10 To Strength",
    armor: "+10 To Strength",
    level: 41,
  },
  {
    id: "020",
    name: "Lem",
    image: "images/Lem.gif",
    weapons: "75% Extra Gold From Monsters",
    armor: "50% Extra Gold From Monsters",
    level: 43,
  },
  {
    id: "021",
    name: "Pul",
    image: "images/Pul.gif",
    weapons: "+75% Damage To Demons, +100 Attack Rating Against Demon",
    armor: "+30% Enhanced Defense",
    level: 45,
  },
  {
    id: "022",
    name: "Um",
    image: "images/Um.gif",
    weapons: "25% Chance of Open Wounds",
    armor: "All Resistances +15 (Armor/Helms) +22 (Shields)",
    level: 47,
  },
  {
    id: "023",
    name: "Mal",
    image: "images/Mal.gif",
    weapons: "Prevent Monster Heal",
    armor: "Magic Damage Reduced By 7",
    level: 49,
  },
  {
    id: "024",
    name: "Ist",
    image: "images/Ist.gif",
    weapons: "30% Better Chance of Getting Magic Items",
    armor: "25% Better Chance of Getting Magic Items",
    level: 51,
  },
  {
    id: "025",
    name: "Gul",
    image: "images/Gul.gif",
    weapons: "20% Bonus To Attack Rating",
    armor: "5% To Maximum Poison Resist",
    level: 53,
  },
  {
    id: "026",
    name: "Vex",
    image: "images/Vex.gif",
    weapons: "7% Mana Stolen Per Hit",
    armor: "5% To Maximum Fire Resist",
    level: 55,
  },
  {
    id: "027",
    name: "Ohm",
    image: "images/Ohm.gif",
    weapons: "+50% Enhanced Damage",
    armor: "5% To Maximum Cold Resist",
    level: 57,
  },
  {
    id: "028",
    name: "Lo",
    image: "images/Lo.gif",
    weapons: "20% Deadly Strike",
    armor: "5% To Maximum Lightning Resist",
    level: 59,
  },
  {
    id: "029",
    name: "Sur",
    image: "images/Sur.gif",
    weapons: "Hit Blinds Target",
    armor: "Maximum Mana 5%/+50 To Mana (Shields)",
    level: 61,
  },

  {
    id: "030",
    name: "Ber",
    image: "images/Ber.gif",
    weapons: "20% Chance of Crushing Blow",
    armor: "Damage Reduced by 8%",
    level: 63,
  },

  {
    id: "031",
    name: "Jah",
    image: "images/Jah.gif",
    weapons: "Ignore Target's Defense",
    armor: "Increase Maximum Life 5%/+50 Life (Shields)",
    level: 65,
  },
  {
    id: "032",
    name: "Cham",
    image: "images/Cham.gif",
    weapons: "Freeze Target +3",
    armor: "Cannot Be Frozen",
    level: 67,
  },
  {
    id: "033",
    name: "Zod",
    image: "images/Zod.gif",
    weapons: "Indestructible",
    armor: "Indestructible",
    level: 69,
  },
];
const slotsTypes = [
  {
    type: "weapon",
    back: "images/sss/Weapon.jpg",
  },
  {
    type: "armor",
    back: "images/sss/Armor.jpeg",
  },
  {
    type: "helmet",
    back: "images/sss/Helm.jpeg",
  },
  {
    type: "shield",
    back: "images/sss/Weapon.jpg",
  },
];
const gemsTypes = [
  {
    type: "gem",
    back: "images/sss/Weapon.jpg",
  },
  {
    type: "rune",
    back: "images/sss/Armor.jpeg",
  },
  {
    type: "javel",
    back: "images/sss/Helm.jpeg",
  },
];

const gems = [
  {
    id: 1,
    name: "Amethyst",
    quality: "Chipped",
    img: "images/gems/chippedamethyst.gif",
    level: 1,
    weapon: "+40 to Attack Rating",
    shield: "+8 to Defense",
    armor: "+3 to Strength",
    helmet: "+3 to Strength",
  },
  {
    id: 2,
    name: "Amethyst",
    quality: "Flawed",
    img: "images/gems/flawedamethyst.gif",
    level: 5,
    weapon: "+60 to Attack Rating",
    shield: "+12 to Defense",
    armor: "+4 to Strength",
    helmet: "+4 to Strength",
  },
  {
    id: 3,
    name: "Amethyst",
    quality: "",
    img: "images/gems/amethyst.gif",
    level: 12,
    weapon: "+80 to Attack Rating",
    shield: "+18 to Defense",
    armor: "+6 to Strength",
    helmet: "+6 to Strength",
  },
  {
    id: 4,
    name: "Amethyst",
    quality: "Flawless",
    img: "images/gems/flawlessamethyst.gif",
    level: 15,
    weapon: "+100 to Attack Rating",
    shield: "+24 to Defense",
    armor: "+8 to Strength",
    helmet: "+8 to Strength",
  },
  {
    id: 5,
    name: "Amethyst",
    quality: "Perfect",
    img: "images/gems/perfectamethyst.gif",
    level: 18,
    weapon: "+150 to Attack Rating",
    shield: "+30 to Defense",
    armor: "+10 to Strength",
    helmet: "+10 to Strength",
  },
  {
    id: 6,
    name: "Skull",
    quality: "Chipped",
    img: "images/gems/chippedskull.gif",
    level: 1,
    weapon: "Steals 2% life, 1% Mana",
    shield: "Attacker Takes 4 Damage",
    armor: "Replenish Life +2, Regenerate Mana 8%",
    helmet: "Replenish Life +2, Regenerate Mana 8%",
  },
  {
    id: 7,
    name: "Skull",
    quality: "Flawed",
    img: "images/gems/flawedskull.gif",
    level: 5,
    weapon: "Steals 2% life, 2% Mana",
    shield: "Attacker Takes 8 Damage",
    armor: "Replenish Life +3, Regenerate Mana 8%",
    helmet: "Replenish Life +3, Regenerate Mana 8%",
  },
  {
    id: 8,
    name: "Skull",
    quality: "",
    img: "images/gems/skull.gif",
    level: 12,
    weapon: "Steals 3% life, 2% Mana",
    shield: "Attacker Takes 12 Damage",
    armor: "Replenish Life +3, Regenerate Mana 12%",
    helmet: "Replenish Life +3, Regenerate Mana 12%",
  },
  {
    id: 9,
    name: "Skull",
    quality: "Flawless",
    img: "images/gems/flawlessskull.gif",
    level: 15,
    weapon: "Steals 3% life, 3% Mana",
    shield: "Attacker Takes 16 Damage",
    armor: "Replenish Life +4, Regenerate Mana 12%",
    helmet: "Replenish Life +4, Regenerate Mana 12%",
  },
  {
    id: 10,
    name: "Skull",
    quality: "Perfect",
    img: "images/gems/perfectskull.gif",
    level: 18,
    weapon: "Steals 4% life, 3% Mana",
    shield: "Attacker Takes 20 Damage",
    armor: "Replenish Life +5, Regenerate Mana 19%",
    helmet: "Replenish Life +5, Regenerate Mana 19%",
  },
  {
    id: 11,
    name: "Sapphire",
    quality: "chipped",
    img: "images/gems/chippedsaphire.gif",
    level: 1,
    weapon: "1-3 Cold Damage - 1.0 sec Duration",
    shield: "12% Resist Cold",
    armor: "+10 Max Mana",
    helmet: "+10 Max Mana",
  },
  {
    id: 12,
    name: "Sapphire",
    quality: "Flawed",
    img: "images/gems/flawedsaphire.gif",
    level: 5,
    weapon: "3-5 Cold Damage - 1.4 sec Duration",
    shield: "16% Resist Cold",
    armor: "+17 Max Mana",
    helmet: "+17 Max Mana",
  },
  {
    id: 13,
    name: "Sapphire",
    quality: "",
    img: "images/gems/saphire.gif",
    level: 12,
    weapon: "4-7 Cold Damage - 2.0 sec Duration",
    shield: "22% Resist Cold",
    armor: "+24 Max Mana",
    helmet: "+24 Max Mana",
  },
  {
    id: 14,
    name: "Sapphire",
    quality: "Flawless",
    img: "images/gems/flawlesssaphire.gif",
    level: 15,
    weapon: "6-10 Cold Damage - 2.4 sec Duration",
    shield: "28% Resist Cold",
    armor: "+31 Max Mana",
    helmet: "+31 Max Mana",
  },
  {
    id: 15,
    name: "Sapphire",
    quality: "Perfect",
    img: "images/gems/perfectsaphire.gif",
    level: 18,
    weapon: "10-14 Cold Damage - 3.0 sec Duration",
    shield: "40% Resist Cold",
    armor: "+38 Max Mana",
    helmet: "+38 Max Mana",
  },
  {
    id: 16,
    name: "Emerald",
    quality: "chipped",
    img: "images/gems/chippedemerald.gif",
    level: 1,
    weapon: "+10 Poison Damage over 3 Seconds",
    shield: "12% Resist Poison",
    armor: "+3 to Dexterity",
    helmet: "+3 to Dexterity",
  },
  {
    id: 17,
    name: "Emerald",
    quality: "Flawed",
    img: "images/gems/flawedemerald.gif",
    level: 5,
    weapon: "+20 Poison Damage over 4 Seconds",
    shield: "16% Resist Poison",
    armor: "+4 to Dexterity",
    helmet: "+4 to Dexterity",
  },
  {
    id: 18,
    name: "Emerald",
    quality: "",
    img: "images/gems/chippedemerald.gif",
    level: 12,
    weapon: "+40 Poison Damage over 5 Seconds",
    shield: "22% Resist Poison",
    armor: "+6 to Dexterity",
    helmet: "+6 to Dexterity",
  },
  {
    id: 19,
    name: "Emerald",
    quality: "Flawless",
    img: "images/gems/flawlessemerald.gif",
    level: 15,
    weapon: "+60 Poison Damage over 6 Seconds",
    shield: "28% Resist Poison",
    armor: "+8 to Dexterity",
    helmet: "+8 to Dexterity",
  },
  {
    id: 20,
    name: "Emerald",
    quality: "Perfect",
    img: "images/gems/perfectemerald.gif",
    level: 18,
    weapon: "+100 Poison Damage over 7 Seconds",
    shield: "40% Resist Poison",
    armor: "+10 to Dexterity",
    helmet: "+10 to Dexterity",
  },
  {
    id: 21,
    name: "Ruby",
    quality: "chipped",
    img: "images/gems/chippedruby.gif",
    level: 1,
    weapon: "3-4 Fire Damage",
    shield: "12% Resist Fire",
    armor: "+10 to Life",
    helmet: "+10 to Life",
  },
  {
    id: 22,
    name: "Ruby",
    quality: "Flawed",
    img: "images/gems/flawedruby.gif",
    level: 5,
    weapon: "5-8 Fire Damage",
    shield: "16% Resist Fire",
    armor: "+17 to Life",
    helmet: "+17 to Life",
  },
  {
    id: 23,
    name: "Ruby",
    quality: "",
    img: "images/gems/ruby.gif",
    level: 12,
    weapon: "8-12 Fire Damage",
    shield: "22% Resist Fire",
    armor: "+24 to Life",
    helmet: "+24 to Life",
  },
  {
    id: 24,
    name: "Ruby",
    quality: "Flawless",
    img: "images/gems/flawlessruby.gif",
    level: 15,
    weapon: "10-16 Fire Damage",
    shield: "28% Resist Fire",
    armor: "+31 to Life",
    helmet: "+31 to Life",
  },
  {
    id: 25,
    name: "Ruby",
    quality: "Perfect",
    img: "images/gems/perfectruby.gif",
    level: 18,
    weapon: "15-20 Fire Damage",
    shield: "40% Resist Fire",
    armor: "+38 to Life",
    helmet: "+38 to Life",
  },
  {
    id: 26,
    name: "Diamond",
    quality: "Chipped",
    img: "images/gems/chippeddiamond.gif",
    level: 1,
    weapon: "+28% Damage vs. Undead",
    shield: "All Resistances +6%",
    armor: "+20 to attack Rating",
    helmet: "+20 to attack Rating",
  },
  {
    id: 27,
    name: "Diamond",
    quality: "Flawed",
    img: "images/gems/flaweddiamond.gif",
    level: 5,
    weapon: "+34% Damage vs. Undead",
    shield: "All Resistances +8%",
    armor: "+40 to attack Rating",
    helmet: "+40 to attack Rating",
  },
  {
    id: 28,
    name: "Diamond",
    quality: "",
    img: "images/gems/diamond.gif",
    level: 12,
    weapon: "+44% Damage vs. Undead",
    shield: "All Resistances +11%",
    armor: "+60 to attack Rating",
    helmet: "+60 to attack Rating",
  },
  {
    id: 29,
    name: "Diamond",
    quality: "Flawless",
    img: "images/gems/flawlessdiamond.gif",
    level: 15,
    weapon: "+54% Damage vs. Undead",
    shield: "All Resistances +14%",
    armor: "+80 to attack Rating",
    helmet: "+80 to attack Rating",
  },
  {
    id: 30,
    name: "Diamond",
    quality: "Perfect",
    img: "images/gems/perfectdiamond.gif",
    level: 18,
    weapon: "+68% Damage vs. Undead",
    shield: "All Resistances +19%",
    armor: "+100 to attack Rating",
    helmet: "+100 to attack Rating",
  },
  {
    id: 31,
    name: "Topaz",
    quality: "Chipped",
    img: "images/gems/chippedtopaz.gif",
    level: 1,
    weapon: "1-8 Lightning Damage",
    shield: "12% Resist Lightning",
    armor: "+9% Chance to Find Magic Items",
    helmet: "+9% Chance to Find Magic Items",
  },
  {
    id: 32,
    name: "Topaz",
    quality: "Flawed",
    img: "images/gems/flawedtopaz.gif",
    level: 5,
    weapon: "1-14 Lightning Damage",
    shield: "16% Resist Lightning",
    armor: "+13% Chance to Find Magic Items",
    helmet: "+13% Chance to Find Magic Items",
  },
  {
    id: 33,
    name: "Topaz",
    quality: "",
    img: "images/gems/topaz.gif",
    level: 12,
    weapon: "1-22 Lightning Damage",
    shield: "22% Resist Lightning",
    armor: "+16% Chance to Find Magic Items",
    helmet: "+16% Chance to Find Magic Items",
  },
  {
    id: 34,
    name: "Topaz",
    quality: "Flawless",
    img: "images/gems/flawlesstopaz.gif",
    level: 15,
    weapon: "1-30 Lightning Damage",
    shield: "28% Resist Lightning",
    armor: "+20% Chance to Find Magic Items",
    helmet: "+20% Chance to Find Magic Items",
  },
  {
    id: 35,
    name: "Topaz",
    quality: "Perfect",
    img: "images/gems/perfecttopaz.gif",
    level: 18,
    weapon: "1-40 Lightning Damage",
    shield: "40% Resist Lightning",
    armor: "+24% Chance to Find Magic Items",
    helmet: "+24% Chance to Find Magic Items",
  },
];
const weaponTypes = [
  {
    id: 1,
    name: "Broadsword",
    img: "images/weapons/broadsword.gif",
    maxSockets: 6,
  },
  {
    id: 2,
    name: "crystalsword.gif",
    img: "images/weapons/crystalsword.gif",
    maxSockets: 6,
  },
  {
    id: 3,
    name: "Flamberge",
    img: "images/weapons/flamberge.gif",
    maxSockets: 6,
  },
  {
    id: 4,
    name: "Shortsword",
    img: "images/weapons/shortsword.gif",
    maxSockets: 3,
  },
];
const helmetTypes = [
  {
    id: 1,
    name: "Cap",
    img: "images/helms/cap.gif",
    maxSockets: 2,
  },
  {
    id: 2,
    name: "Helm",
    img: "images/helms/helm.gif",
    maxSockets: 3,
  },
  {
    id: 3,
    name: "Greathelm",
    img: "images/helms/greathelm.gif",
    maxSockets: 4,
  },
  {
    id: 4,
    name: "Crown",
    img: "images/helms/crown.gif",
    maxSockets: 4,
  },
];
const shieldTypes = [
  {
    id: 1,
    name: "Buckler",
    img: "images/shields/buckler.gif",
    maxSockets: 3,
  },
  {
    id: 2,
    name: "smallshield",
    img: "images/shields/smallshield.gif",
    maxSockets: 3,
  },
  {
    id: 3,
    name: "Kiteshield",
    img: "images/shields/kiteshield.gif",
    maxSockets: 3,
  },
  {
    id: 4,
    name: "Spikedshield",
    img: "images/shields/spikedshield.gif",
    maxSockets: 4,
  },
];
const armorTypes = [
  {
    id: 1,
    name: "ancientarmor",
    img: "images/armor/ancientarmor.gif",
    maxSockets: 6,
  },
  {
    id: 2,
    name: "breastplate",
    img: "images/armor/breastplate.gif",
    maxSockets: 6,
  },
  {
    id: 3,
    name: "chainmail",
    img: "images/armor/chainmail.gif",
    maxSockets: 6,
  },
  {
    id: 4,
    name: "gothicplate",
    img: "images/armor/gothicplate.gif",
    maxSockets: 6,
  },
  {
    id: 5,
    name: "ringmail",
    img: "images/armor/ringmail.gif",
    maxSockets: 6,
  },
];
// Ранее список

const itemSlotAdded = [];

const itemContainerEl = document.getElementById("itemContainer");
const gemsContainerEl = document.getElementById("gemsContainer");
const typeSelectEl = document.querySelector('[name="typeSelect"]');
let slotType = "weapon";
let slotItem;

gemsContainerEl.addEventListener("drop", (event) => {
  event.preventDefault();
  const dataText = event.dataTransfer.getData("text");

  document.getElementById(dataText).remove();
});
gemsContainerEl.addEventListener("dragover", (e) => e.preventDefault());

function initSlot(type) {
  const data = slotsTypes.find((back) => back.type === type);
  const itemEl = document.createElement("div");
  itemEl.style.backgroundImage = `url(${data.back})`;
  itemEl.classList.add(`slotItem`);
  itemEl.classList.add(`slotItem__${data.type}`);
  itemEl.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log("drop", itemEl.querySelectorAll(".gemItem").length);
    if (!slotItem) return;
    if (slotItem.maxSockets == itemEl.querySelectorAll(".gemItem").length)
      return;
    const dataText = event.dataTransfer.getData("text");
    const gemEl = document.querySelector(`[data-id="${dataText}"]`).cloneNode(); ///
    itemEl.appendChild(gemEl);
    itemEl.classList.forEach((className) => {
      if (className.includes("slotItem--count-"))
        itemEl.classList.remove(className);
    });
    itemEl.classList.add(
      `slotItem--count-${itemEl.querySelectorAll(".gemItem").length}`
    );
  });
  itemEl.addEventListener("dragover", (e) => e.preventDefault());
  itemContainerEl.append(itemEl);
}

typeSelectEl.addEventListener("change", (event) => {
  slotType = event.target.value;

  Array.from(document.getElementsByClassName("slotItem")).forEach((el) =>
    el.remove()
  );

  initSlot(slotType);
});

function initGems() {
  gems.forEach(({ id, name, quality, img }) => {
    const itemEl = document.createElement("div");
    itemEl.style.backgroundImage = `url(${img})`;
    itemEl.title = [quality, name].join(" ");
    itemEl.dataset.id = id;
    itemEl.classList.add(`gemItem`);
    itemEl.draggable = true;
    itemEl.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text", id);
    });
    gemsContainerEl.append(itemEl);
  });
}
function initRunes() {
  runes.forEach(({ id, name, image }) => {
    const itemEl = document.createElement("div");
    itemEl.style.backgroundImage = `url(${image})`;
    itemEl.title = [name].join(" ");
    itemEl.dataset.id = id;
    itemEl.classList.add(`gemItem`);
    itemEl.draggable = true;
    itemEl.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text", id);
    });
    gemsContainerEl.append(itemEl);
  });
}
function initSelectableItems(rootEl, closeModal) {
  let itemTypes;
  switch (slotType) {
    case "weapon":
      itemTypes = weaponTypes;
      break;
    case "armor":
      itemTypes = armorTypes;
      break;
    case "helmet":
      itemTypes = helmetTypes;
      break;
    case "shield":
      itemTypes = shieldTypes;
      break;
  }
  itemTypes.forEach(({ id, name, img, maxSockets }) => {
    const itemEl = document.createElement("div");
    itemEl.style.backgroundImage = `url(${img})`;
    itemEl.title = name;
    itemEl.dataset.id = id;
    itemEl.classList.add(`${slotType}Item`);
    itemEl.addEventListener("click", () => {
      const slot = document.querySelector(".slotItem");
      Array.from(slot.childNodes).map((x) => x.remove());
      const selectedItemEl = itemEl.cloneNode(); //создаёт копию блока
      slot.appendChild(selectedItemEl); //вставляет шмотку в слот
      closeModal();
      slotItem = { id, name, img, maxSockets };
    });
    rootEl.append(itemEl);
  });
}

function init() {
  initSlot("weapon");
  initGems();
  initRunes();
}
init(); // запусскаем фунции по списку

const opener = document.getElementById("pickitem");
let open = false;
opener.addEventListener("click", () => {
  if (open) return;
  open = true;
  const modal = document.createElement("div");
  modal.classList.add("modal-root");
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modal.appendChild(modalOverlay);
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modal.appendChild(modalContent);
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerText = "Close";
  modalContent.appendChild(closeButton);
  //добавляем остальные элементы в modalContent
  const slotsContainer = document.createElement("div");
  slotsContainer.classList.add("slotContainer");
  modalContent.appendChild(slotsContainer);
  modal.appendChild(modalContent);
  const closeModal = () => {
    modal.remove();
    open = false;
  };
  initSelectableItems(slotsContainer, closeModal);
  modalOverlay.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);
  document.body.appendChild(modal);
});
