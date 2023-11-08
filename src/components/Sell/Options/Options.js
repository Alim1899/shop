const Brands = [
  { key: "Select a brand", value: "", disabled: true },
  { key: "option1", value: "Quechua" },
  { key: "option2", value: "The North face" },
  { key: "option3", value: "Salewa" },
  { key: "option4", value: "Columbia" },
  { key: "option5", value: "Salomon" },
  { key: "option6", value: "Marmot" },
  { key: "option7", value: "Mammut" },
  { key: "option8", value: "Black Diamont" },
  { key: "option9", value: "Jack & WolfSkin" },
  { key: "other", value: "Other" },
];
const Genders = [
  { key: "Man", value: "Man" },
  { key: "Woman", value: "Woman" },
  { key: "Kids", value: "Kids" },
  { key: "Unisex", value: "Man" },
];

const Categories = [
  { key: "Select a Category", value: "", disabled: true },
  { key: "Clothing", value: "Clothing" },
  { key: "Footwear", value: "Footwear" },
  { key: "Travel Gear", value: "Travel Gear" },
  { key: "Camping and Hiking", value: "Camping and Hiking" },
  { key: "Climbing", value: "Climbing" },
  { key: "Snowsports", value: "Snowsports" },
];

const ClothingCategories = [
  {
    key: "Select Clothing Type",
    value: "",
    disabled: "true",
  },
  { key: "Tops", value: "Tops" },
  { key: "Bottoms", value: "Bottoms" },
  { key: "Jackets", value: "Jackets" },
  { key: "Shirts", value: "Shirts" },
  { key: "Pants", value: "Pants" },
  { key: "Shorts", value: "Shorts" },
  { key: "Sweaters and Sweatshirts", value: "Sweaters and Sweatshirts" },
  { key: "Underwear", value: "Underwear" },
  { key: "Vests", value: "Vests" },
];
const FootwearCategories = [
  {
    key: "Select Footwear Type",
    value: "",
    disabled: "true",
  },
  { key: "Shoes", value: "Shoes" },
  { key: "Boots", value: "Boots" },
  { key: "Socks", value: "Socks" },
  { key: "Sandals", value: "Sandals" },
  { key: "Slipers", value: "Slipers" },
  { key: "Footwear Accesories", value: "Footwear Accesories" },
];
const TravelGearCategories = [
  { key: "Select Gear Type", value: "", disabled: "true" },

  { key: "Day Bags and Packs", value: "Day Bags and Packs" },
  { key: "Luggage", value: "Luggage" },
  { key: "Laptop Bags", value: "Laptop Bags" },
  { key: "Phone and Electronics Cases", value: "Phone and Electronics Cases" },
  { key: "Travel Accesories", value: "Travel Accesories" },
  { key: "Sleep Accesories", value: "Sleep Accesories" },
];
const CampingAndHikingCategories = [
  { key: "Select Type", value: "", disabled: "true" },

  { key: "Tents", value: "Tents" },
  { key: "Hiking Backpacks", value: "Hiking Backpacks" },
  { key: "Sleeping Gear", value: "Sleeping Gear" },
  { key: "Camp Furniture", value: "Camp Furniture" },
  { key: "Sunglasses", value: "Sunglasses" },
  { key: "Camp Lighting", value: "Camp Lighting" },
  { key: "Camp Electronics", value: "Camp Electronics" },
  { key: "Health & Safety", value: "Health & Safety" },
  { key: "Gear for Animals", value: "Clothing" },
];

const ClimbingCategories = [
  { key: "Select Type", value: "", disabled: "true" },

  { key: "Climbing Shoes", value: "Climbing Shoes" },
  { key: "Chalk & Chalk Bags", value: "Chalk & Chalk Bags" },
  { key: "Climbing Hardware", value: "Climbing Hardware" },
  { key: "Helmets", value: "Helmets" },
  { key: "Climbing Essentials", value: "Climbing Essentials" },
  { key: "Ropes", value: "Ropes" },
  { key: "Mountaineering Gear", value: "Mountaineering Gear" },
];
const SnowsportsCategories = [
  { key: "Select Sport Type", value: "", disabled: "true" },
  { key: "Skiing", value: "Skiing" },
  { key: "Snow Clothing", value: "Snow Clothing" },
  { key: "Snowboarding", value: "Snowboarding" },
  { key: "Snow Gear", value: "Snow Gear" },
  { key: "Snow SHoes", value: "Snow SHoes" },
];

const StepCategories = {
  ClothingCategories,
  FootwearCategories,
  TravelGearCategories,
  CampingAndHikingCategories,
  ClimbingCategories,
  SnowsportsCategories,
};

const Options = { Brands, Genders, Categories, StepCategories };

export default Options;
