
document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
      { name: "Whole Grain Pancakes", price: "KD 2.750", description: "Whole grain pancake, mixed berries, and maple syrup. 431 kcal, 12g protein, 80g carbs, 7g fats.", category: "popular", tags: ["Popular", "Breakfast", "Sweet"] },
      { name: "12 Mini Fatayer in a Box", price: "KD 3.000", description: "Choose mixed cheese, pizza, zaatar with stuffed cheese, zaatar with labneh, or falafel with labneh.", category: "popular", tags: ["Popular", "Box", "Brown Dough"] },
      { name: "Cranberry Turkey Sandwich", price: "KD 2.750", description: "Cranberry jam, sourdough bread, turkey slice, and honey mustard. 384 kcal, 21g protein.", category: "popular", tags: ["Sandwich", "Turkey"] },
      { name: "Pink Pasta with Chicken", price: "KD 4.500", description: "Pasta with tomato sauce, parmesan cheese, and chicken breast.", category: "popular", tags: ["Popular", "Pasta", "Chicken"] },
      { name: "Club Sandwich", price: "KD 2.950", description: "Brown toast, mayonnaise, iceberg, cucumber, tomato, pickle cucumber, shredded chicken, and turkey.", category: "popular", tags: ["Sandwich", "Chicken"] },
      { name: "Salmon Bowl", price: "KD 5.900", description: "Jasmine rice, salmon, avocado, cucumber, carrot, sushi ginger, edamame beans, and pineapple.", category: "popular", tags: ["Bowl", "Fresh", "Protein"] },
      { name: "Shakshoka", price: "KD 2.950", description: "Egg, parsley, shakshoka, feta cheese, pita bread, and labneh. 490 kcal, 31g protein.", category: "popular", tags: ["Breakfast", "Protein"] },
      { name: "English Breakfast", price: "KD 3.750", description: "Cheese omelette, green salad, beef bacon, chicken sausage, mash brown, and sourdough.", category: "popular", tags: ["Breakfast", "Classic"] },
      { name: "Iced Spanish Latte Canteen", price: "KD 13.000", description: "Cold gathering drink canteen, good for 8 persons.", category: "popular", tags: ["Canteen", "Group"] },
      { name: "Nova's Protein Pancake", price: "KD 3.000", description: "Whey protein, peanut butter, mixed berries, and maple syrup. 618 kcal, 30g protein.", category: "popular", tags: ["Protein", "Pancake"] },

      { name: "Sambosa Buffalo Chicken", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Dozen"] },
      { name: "Sambosa Musakhan Chicken", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Chicken"] },
      { name: "Sambosa Feta Cheese", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Cheese"] },
      { name: "Sambosa Sweet Corn Mozzarella Cheese", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Mozzarella"] },
      { name: "Sambosa Potato", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Vegetarian"] },
      { name: "Sambosa Pesto Cheese", price: "KD 3.600", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Pesto"] },
      { name: "Sambosa Short Ribs", price: "KD 5.400", description: "One dozen frozen sambosa in a box. Easy and ready to cook.", category: "sambosa", tags: ["Frozen", "Short Ribs"] },

      { name: "Chocolate Hot Canteen", price: "KD 12.500", description: "Creamy hot chocolate canteen suitable for winter gatherings. Good for 8 persons.", category: "canteen", tags: ["Hot", "Group"] },
      { name: "White Mocha Hot Canteen", price: "KD 13.500", description: "Hot white mocha canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Hot", "Mocha"] },
      { name: "Spanish Latte Hot Canteen", price: "KD 13.000", description: "Hot Spanish latte canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Hot", "Latte"] },
      { name: "Americano Hot Canteen", price: "KD 13.500", description: "Hot Americano canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Hot", "Americano"] },
      { name: "Latte Hot Canteen", price: "KD 10.500", description: "Hot latte canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Hot", "Latte"] },
      { name: "Iced Americano Canteen", price: "KD 13.500", description: "Cold Americano canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Cold", "Group"] },
      { name: "Iced Chocolate Canteen", price: "KD 12.500", description: "Cold chocolate canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Cold", "Chocolate"] },
      { name: "Iced White Mocha Canteen", price: "KD 13.500", description: "Cold white mocha canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Cold", "Mocha"] },
      { name: "Iced Latte Canteen", price: "KD 10.500", description: "Cold latte canteen for gatherings. Good for 8 persons.", category: "canteen", tags: ["Cold", "Latte"] },

      { name: "24 Mini Fatayer in a Box", price: "KD 6.000", description: "Choose mixed cheese, pizza, zaatar with stuffed cheese, zaatar with labneh, or falafel with labneh.", category: "fatayer", tags: ["Box", "Party"] },
      { name: "Fatayer Zaatar Large", price: "KD 2.750", description: "Traditional Middle Eastern flat bread in brown dough.", category: "fatayer", tags: ["Zaatar", "Large"] },
      { name: "Fatayer Zaatar with Stuffed Cheese Small", price: "KD 1.500", description: "Small zaatar fatayer with stuffed cheese.", category: "fatayer", tags: ["Small", "Cheese"] },
      { name: "Fatayer Three Cheese Small", price: "KD 1.250", description: "Small three-cheese fatayer prepared with brown dough.", category: "fatayer", tags: ["Small", "Cheese"] },
      { name: "Pizza Margarita", price: "KD 3.250", description: "Fresh quality ingredients prepared with love and care.", category: "fatayer", tags: ["Pizza", "Margarita"] },
      { name: "Pizza Pepperoni", price: "KD 3.500", description: "Made with brown flour for a healthier pizza choice.", category: "fatayer", tags: ["Pizza", "Pepperoni"] },
      { name: "Fatayer Pizza Small", price: "KD 1.250", description: "Brown dough topped with tomatoes, mozzarella cheese, and extra virgin olive oil.", category: "fatayer", tags: ["Small", "Pizza"] },
      { name: "Fatayer Zaatar with Labneh Small", price: "KD 1.250", description: "Small zaatar fatayer with labneh.", category: "fatayer", tags: ["Small", "Labneh"] },
      { name: "Fatayer Falafel with Labneh", price: "KD 1.250", description: "Falafel fatayer with labneh in brown dough.", category: "fatayer", tags: ["Falafel", "Labneh"] },
      { name: "Fatayer Cheese Large", price: "KD 3.250", description: "Creamy cheese fatayer using brown dough.", category: "fatayer", tags: ["Large", "Cheese"] },

      { name: "Mongolian Beef", price: "KD 4.500", description: "Shredded beef, capsicum, jasmine rice, white onion, spring onion, and sesame seeds. 482 kcal, 33g protein.", category: "mains", tags: ["Beef", "Rice"] },
      { name: "Mushroom Penne Pasta in Bechamel Sauce", price: "KD 4.000", description: "Chicken, mushroom, penne pasta, and bechamel sauce.", category: "mains", tags: ["Pasta", "Chicken"] },
      { name: "Cheese Burger", price: "KD 3.250", description: "Grilled beef patty, tomato, pickles, lettuce, cheese slice, and special burger sauce. 468 kcal, 35g protein.", category: "mains", tags: ["Burger", "Beef"] },
      { name: "Chicken Burger", price: "KD 3.000", description: "Breaded roasted chicken breast, lettuce, cheddar cheese, and special sweet sauce. 430 kcal, 40g protein.", category: "mains", tags: ["Burger", "Chicken"] },
      { name: "Barbeque Chicken Pizza", price: "KD 2.500", description: "Chicken pizza with barbeque flavor profile.", category: "mains", tags: ["Pizza", "Chicken"] },
      { name: "Sweet Bacon Pizza", price: "KD 2.500", description: "Pizza with beef bacon and parmesan cheese.", category: "mains", tags: ["Pizza", "Beef Bacon"] },
      { name: "Coleslaw Chicken Burger", price: "KD 3.000", description: "Breaded roasted chicken breast, coleslaw, cheddar cheese, and ranch dressing. 369 kcal, 45g protein.", category: "mains", tags: ["Burger", "Chicken"] },
      { name: "Triple Colored Penne Pasta", price: "KD 3.750", description: "Chicken, bechamel sauce, regular pasta sauce, and pesto sauce.", category: "mains", tags: ["Pasta", "Pesto"] },
      { name: "San Sebastian Cake Whole", price: "KD 20.000", description: "One whole San Sebastián cake, 8 slices.", category: "mains", tags: ["Whole Cake", "Dessert"] },

      { name: "Breakfast Bun", price: "KD 2.500", description: "Multigrain bread, egg, turkey slice, mayonnaise, and hollandaise. 268 kcal, 14g protein.", category: "wraps", tags: ["Breakfast", "Highly Rated"] },
      { name: "Zaatar Halloumi Omlette", price: "KD 2.500", description: "Two egg whites, one whole egg, zaatar, halloumi cheese, cherry tomato, and sourdough bread.", category: "wraps", tags: ["Eggs", "Halloumi"] },
      { name: "Avocado Eggs Benedict", price: "KD 2.450", description: "Poached egg, sourdough bread, hollandaise sauce, sundried tomato, and sumac. 298 kcal, 24g protein.", category: "wraps", tags: ["Avocado", "Eggs"] },
      { name: "Halloumi Pizza", price: "KD 2.750", description: "Ciabatta bread, marinara sauce, spinach, cherry tomato, and black olive. 392 kcal, 18g protein.", category: "wraps", tags: ["Halloumi", "Pizza"] },
      { name: "Turkish Eggs", price: "KD 2.750", description: "Egg, sourdough bread, yogurt, and paprika. 284 kcal, 16g protein.", category: "wraps", tags: ["Eggs", "Yogurt"] },
      { name: "Avocado Egg Multigrain Bread", price: "KD 2.250", description: "Avocado, multigrain bread, and eggs.", category: "wraps", tags: ["Avocado", "Eggs"] },
      { name: "Greek Halloumi Wrap", price: "KD 1.500", description: "428 kcal, 22g protein, 31g carbs, 24g fats.", category: "wraps", tags: ["Wrap", "Halloumi"] },
      { name: "Caesar Wrap", price: "KD 1.500", description: "346 kcal, 20g protein, 35g carbs, 14g fats.", category: "wraps", tags: ["Wrap", "Caesar"] },
      { name: "Middle Eastern Mezze Platter", price: "KD 3.500", description: "Beetroot hummus, falafel, tahina sauce, pita bread, and foul.", category: "wraps", tags: ["Mezze", "Platter"] },

      { name: "Iced Matcha Latte", price: "KD 2.350", description: "Iced matcha latte from Nova's limited summer collection.", category: "summer", tags: ["Matcha", "Popular"] },
      { name: "Coconut Cloud Latte", price: "KD 2.650", description: "Coconut water, double espresso shot, and condensed milk.", category: "summer", tags: ["Signature", "Iced"] },
      { name: "Mango Matcha Latte", price: "KD 2.750", description: "Mango matcha latte with a tropical summer profile.", category: "summer", tags: ["Matcha", "Mango"] },
      { name: "Matcha Coconut Cloud", price: "KD 2.650", description: "Coconut water topped with cold sweet cream matcha cold foam.", category: "summer", tags: ["Matcha", "Coconut"] },
      { name: "Raspberry Matcha Latte", price: "KD 2.750", description: "Iced raspberry matcha latte from the summer collection.", category: "summer", tags: ["Matcha", "Raspberry"] },
      { name: "Strawberry Matcha Latte", price: "KD 2.750", description: "Iced strawberry matcha latte from the summer collection.", category: "summer", tags: ["Matcha", "Strawberry"] },
      { name: "Matcha Frappuccino", price: "KD 2.100", description: "Cold matcha frappuccino.", category: "summer", tags: ["Matcha", "Frappe"] },
      { name: "Hot Matcha Latte", price: "KD 2.100", description: "Warm matcha latte.", category: "summer", tags: ["Matcha", "Hot"] },

      { name: "Endurance Fueling Drink", price: "KD 1.000", description: "Orange, pineapple, lemon, lime, and honey.", category: "protein", tags: ["Fuel", "Citrus"] },
      { name: "Vanilla Matcha Protein Shake", price: "KD 2.950", description: "Creamy matcha and vanilla shake. 108 kcal, 12g protein, 6g carbs, 4g fats.", category: "protein", tags: ["Protein", "Matcha"] },
      { name: "Peanut Butter Chocolate Protein Shake", price: "KD 2.750", description: "Chocolate and peanut butter protein shake. 577 kcal, 40g protein, 61g carbs, 20g fats.", category: "protein", tags: ["Protein", "Chocolate"] },
      { name: "Pistachio Chia Protein Shake", price: "KD 3.250", description: "Pistachio, vanilla protein powder, and chia seeds.", category: "protein", tags: ["Protein", "Pistachio"] },
      { name: "Pina-Colada Protein Shake", price: "KD 2.750", description: "Pineapple, banana, coconut, and protein powder. 379 kcal, 26g protein.", category: "protein", tags: ["Protein", "Tropical"] },
      { name: "Blueberry Electrolyte Drink", price: "KD 1.500", description: "Blueberry and raspberry electrolyte drink.", category: "protein", tags: ["Electrolyte", "Berry"] },
      { name: "Strawberry Electrolyte Drink", price: "KD 1.500", description: "Strawberry and raspberry electrolyte drink.", category: "protein", tags: ["Electrolyte", "Strawberry"] },

      { name: "Crispy Chicken Caesar Salad", price: "KD 4.500", description: "Romaine lettuce, chicken breast, croutons, and caesar dressing. 475 kcal, 48g protein.", category: "salads", tags: ["Salad", "Chicken"] },
      { name: "Sweet Corn Salad", price: "KD 3.900", description: "Corn, red bell pepper, jalapeno, corn dressing, and light honey mayo. 375 kcal.", category: "salads", tags: ["Salad", "Corn"] },
      { name: "Hakoka Taboula", price: "KD 4.000", description: "Arabic parsley, tomato, cucumber, mint, and crispy rice. 218 kcal.", category: "salads", tags: ["Taboula", "Fresh"] },

      { name: "French Fries", price: "KD 1.250", description: "Classic french fries.", category: "appetizer", tags: ["Side", "Fries"] },
      { name: "Shawarma Meat", price: "KD 3.900", description: "Beef meat, onion, cucumber, tomato, parsley, red zung, green zung, and tahina.", category: "appetizer", tags: ["Shawarma", "Beef"] },
      { name: "Beef Slider", price: "KD 1.250", description: "Beef patty, caramelized onion, feta cheese, and light mayo.", category: "appetizer", tags: ["Slider", "Beef"] },
      { name: "Chicken Slider", price: "KD 1.250", description: "Chicken patty with honey mustard cold slaw.", category: "appetizer", tags: ["Slider", "Chicken"] },
      { name: "Nova Hummus", price: "KD 2.900", description: "Nova hummus served with pita bread.", category: "appetizer", tags: ["Hummus", "Pita"] },
      { name: "Shawarma Chicken", price: "KD 3.250", description: "Chicken, cucumber, tomato, onion, parsley, red zung, green zung, and tzatziki.", category: "appetizer", tags: ["Shawarma", "Chicken"] },

      { name: "Tiramisu Cake One Slice", price: "KD 2.500", description: "One slice of tiramisu cake.", category: "bakery", tags: ["Cake", "Slice"] },
      { name: "Chocolate Cake One Slice", price: "KD 2.500", description: "One slice of chocolate cake.", category: "bakery", tags: ["Cake", "Chocolate"] },
      { name: "Classic Cheese Cake One Slice", price: "KD 2.500", description: "One slice of classic cheese cake.", category: "bakery", tags: ["Cheesecake", "Slice"] },
      { name: "San Sebastián Cake One Slice", price: "KD 2.500", description: "One slice of San Sebastián cake.", category: "bakery", tags: ["Cake", "Slice"] },
      { name: "Dark Chocolate Cake Whole", price: "KD 15.000", description: "One whole dark chocolate cake, 6 slices.", category: "bakery", tags: ["Whole Cake", "Chocolate"] },
      { name: "Tiramisu Cake Whole", price: "KD 15.000", description: "One whole tiramisu cake, 6 slices.", category: "bakery", tags: ["Whole Cake", "Tiramisu"] },
      { name: "Classic Cheesecake Whole", price: "KD 20.000", description: "One whole classic cheesecake, 8 slices.", category: "bakery", tags: ["Whole Cake", "Cheesecake"] },
      { name: "Protein Balls", price: "KD 1.500", description: "Two pieces of your favourite protein balls.", category: "bakery", tags: ["Grab & Go", "Highly Rated"] },

      { name: "Ginger Turmeric Immunity Shot", price: "KD 0.950", description: "Ginger and turmeric immunity shot.", category: "fresh", tags: ["Shot", "Highly Rated"] },
      { name: "Orange Juice", price: "KD 1.750", description: "Fresh orange juice.", category: "fresh", tags: ["Fresh", "Orange"] },
      { name: "Carrot Apple Glow Shot", price: "KD 0.950", description: "Carrot and green apple glow shot.", category: "fresh", tags: ["Shot", "Apple"] },
      { name: "Green Juice", price: "KD 1.750", description: "Fresh green juice.", category: "fresh", tags: ["Fresh", "Green"] },

      { name: "Iced Spanish Latte", price: "KD 2.250", description: "Cold Spanish latte from Nova's coffee bar.", category: "coffee-cold", tags: ["Cold", "Popular"] },
      { name: "Iced Pumpkin Pie Latte", price: "KD 2.250", description: "Holiday pumpkin pie drink with cream on top.", category: "coffee-cold", tags: ["Seasonal", "Iced"] },
      { name: "V60 Cold Coffee", price: "KD 2.000", description: "Cold V60 coffee.", category: "coffee-cold", tags: ["V60", "Cold"] },
      { name: "Iced Nova's Mocha", price: "KD 2.000", description: "Iced Nova's mocha.", category: "coffee-cold", tags: ["Mocha", "Iced"] },
      { name: "Iced Dark Mocha", price: "KD 2.100", description: "Iced dark mocha.", category: "coffee-cold", tags: ["Mocha", "Dark"] },
      { name: "Cold Brew", price: "KD 1.700", description: "Cold brew coffee.", category: "coffee-cold", tags: ["Cold Brew", "Coffee"] },
      { name: "Iced Americano", price: "KD 1.450", description: "Iced Americano.", category: "coffee-cold", tags: ["Americano", "Iced"] },
      { name: "Iced Latte", price: "KD 1.650", description: "Iced latte.", category: "coffee-cold", tags: ["Latte", "Iced"] },
      { name: "Frappes Caramel", price: "KD 2.100", description: "Caramel frappe.", category: "coffee-cold", tags: ["Frappe", "Caramel"] },
      { name: "Frappes Cookies and Cream", price: "KD 2.100", description: "Cookies and cream frappe.", category: "coffee-cold", tags: ["Frappe", "Cookies"] },

      { name: "Hot Dark Chocolate", price: "KD 2.000", description: "Dark chocolate, vanilla, and low-fat milk.", category: "coffee-hot", tags: ["Hot", "Popular"] },
      { name: "Spanish Latte", price: "KD 2.000", description: "Hot Spanish latte.", category: "coffee-hot", tags: ["Latte", "Hot"] },
      { name: "Hot Flat White", price: "KD 1.500", description: "Espresso and steamed milk.", category: "coffee-hot", tags: ["Flat White", "Hot"] },
      { name: "Hot Espresso", price: "KD 1.150", description: "Bold and intense freshly brewed espresso.", category: "coffee-hot", tags: ["Espresso", "Hot"] },
      { name: "Hot Espresso Macchiato", price: "KD 1.350", description: "Hot espresso macchiato.", category: "coffee-hot", tags: ["Macchiato", "Hot"] },
      { name: "Hot Cortado", price: "KD 1.450", description: "Espresso and steamed milk.", category: "coffee-hot", tags: ["Cortado", "Hot"] },
      { name: "Hot Americano", price: "KD 1.350", description: "Espresso and hot water.", category: "coffee-hot", tags: ["Americano", "Hot"] },
      { name: "V60 Hot Coffee", price: "KD 2.000", description: "Hot V60 coffee.", category: "coffee-hot", tags: ["V60", "Hot"] },
      { name: "Hot Cappuccino", price: "KD 1.550", description: "Espresso, steamed milk, and milk foam.", category: "coffee-hot", tags: ["Cappuccino", "Hot"] },
      { name: "Hot Latte", price: "KD 1.550", description: "Espresso and condensed milk.", category: "coffee-hot", tags: ["Latte", "Hot"] },
      { name: "Hot Dark Mocha", price: "KD 1.850", description: "Dark chocolate melted in creamy milk, topped with espresso and whipped cream.", category: "coffee-hot", tags: ["Mocha", "Hot"] },
      { name: "Hot Pumpkin Pie Latte", price: "KD 2.150", description: "Hot pumpkin pie drink with cream on top.", category: "coffee-hot", tags: ["Seasonal", "Hot"] },

      { name: "Iced Shaken Caramel", price: "KD 1.800", description: "Nova's iced shaken caramel.", category: "shaken", tags: ["Shaken", "Caramel"] },
      { name: "Iced Shaken Caramel Sugar Free", price: "KD 1.800", description: "Nova's iced shaken caramel sugar-free.", category: "shaken", tags: ["Shaken", "Sugar Free"] },
      { name: "Iced Shaken Vanilla", price: "KD 1.800", description: "Nova's iced shaken vanilla.", category: "shaken", tags: ["Shaken", "Vanilla"] },
      { name: "Iced Shaken Vanilla Sugar Free", price: "KD 1.800", description: "Nova's iced shaken vanilla sugar-free.", category: "shaken", tags: ["Shaken", "Sugar Free"] },
      { name: "Iced Shaken White Mocha", price: "KD 1.800", description: "Nova's iced shaken white mocha.", category: "shaken", tags: ["Shaken", "Mocha"] },

      { name: "Iced Green Mint Tea", price: "KD 1.500", description: "Iced green mint tea.", category: "tea", tags: ["Tea", "Mint"] },
      { name: "Iced Mango Tea", price: "KD 1.500", description: "Iced mango tea.", category: "tea", tags: ["Tea", "Mango"] },
      { name: "Iced Peach Tea", price: "KD 1.500", description: "Iced peach tea.", category: "tea", tags: ["Tea", "Peach"] },

      { name: "Sparkling Mango", price: "KD 1.950", description: "Sparkling mango mocktail.", category: "mocktails", tags: ["Mocktail", "Mango"] },
      { name: "Green Apple Spritzer", price: "KD 1.950", description: "Green apple spritzer mocktail.", category: "mocktails", tags: ["Mocktail", "Apple"] },
      { name: "Classic Margarita", price: "KD 1.950", description: "Classic margarita mocktail.", category: "mocktails", tags: ["Mocktail", "Classic"] },
      { name: "Mix Berries Spritz", price: "KD 1.800", description: "Mixed berries spritz mocktail.", category: "mocktails", tags: ["Mocktail", "Berries"] },
      { name: "Passion Breeze", price: "KD 1.900", description: "Passion breeze mocktail.", category: "mocktails", tags: ["Mocktail", "Passion"] },
      { name: "Pinacolada", price: "KD 2.100", description: "Pinacolada mocktail.", category: "mocktails", tags: ["Mocktail", "Tropical"] },

      { name: "10 Oz Infuser Glass Bottle 300ml", price: "KD 14.000", description: "Nova merchandise infuser glass bottle, 300ml.", category: "merchandise", tags: ["Bottle", "Merch"] },
      { name: "Rosematicq Hand Sanitizer", price: "KD 4.000", description: "Rosematicq hand sanitizer.", category: "merchandise", tags: ["Merch", "Sanitizer"] },
      { name: "15oz Vacuum Flask 450ml", price: "KD 12.000", description: "Nova merchandise vacuum flask, 450ml.", category: "merchandise", tags: ["Flask", "Merch"] },
      { name: "24oz Shaker Bottle 700ml", price: "KD 10.000", description: "Nova merchandise shaker bottle, 700ml.", category: "merchandise", tags: ["Shaker", "Merch"] },
      { name: "32oz Vacuum Flask 950ml", price: "KD 17.000", description: "Nova merchandise vacuum flask, 950ml.", category: "merchandise", tags: ["Flask", "Merch"] },
      { name: "Elize Rose Water", price: "KD 15.000", description: "Elize rose water merchandise item.", category: "merchandise", tags: ["Rose Water", "Merch"] }
    ];

    const grid = document.getElementById("menuGrid");
    const buttons = document.querySelectorAll(".tab-btn");

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function renderMenu(category = "Popular") {
      if (!grid) {
        return;
      }

      const filteredItems = category === "Popular"
        ? menuItems
        : menuItems.filter(item => item.category === category);

      if (!filteredItems.length) {
        grid.innerHTML = `<p class="empty-menu">No products found in this category.</p>`;
        return;
      }

      grid.innerHTML = filteredItems.map(item => `
        <article class="menu-item">
          <div class="dish-visual"></div>
          <div class="menu-top">
            <h3>${escapeHtml(item.name)}</h3>
            <span class="price">${escapeHtml(item.price)}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
          <div class="tag-list">
            ${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    if (grid) {
      renderMenu("Popular");
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderMenu(button.dataset.category);
      });
    });

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealElements.forEach(element => observer.observe(element));
    } else {
      revealElements.forEach(element => element.classList.add("visible"));
    }

});
