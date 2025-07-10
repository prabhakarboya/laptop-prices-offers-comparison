const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, '../laptops.json');

// Get all laptops with optional filters
const getLaptops = async (req, res) => {
  const { query, brand, min_price, max_price } = req.query;

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const laptops = JSON.parse(data);

    let filteredLaptops = laptops;

    // Filter by query (title)
    if (query) {
      filteredLaptops = filteredLaptops.filter(laptop =>
        laptop.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by brand
    if (brand) {
      filteredLaptops = filteredLaptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(brand.toLowerCase())
      );
    }

    // Filter by price range (min_price and max_price)
    if (min_price && max_price) {
      const minPrice = parseFloat(min_price);
      const maxPrice = parseFloat(max_price);

      filteredLaptops = filteredLaptops.filter(laptop => {
        const amazonPrice = parseFloat(laptop.amazon.price);

        return amazonPrice >= minPrice && amazonPrice <= maxPrice;
      });
    }

    // Return the filtered laptops as JSON
    res.json(filteredLaptops);
  } catch (err) {
    console.error('❌ Error reading or parsing the laptops.json file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get laptop by ID
const getLaptopsById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const laptops = JSON.parse(data);

    // Find the laptop by ID (assuming the _id format is MongoDB-like)
    const laptop = laptops.find(l => l._id.$oid === id);

    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }

    // Return the laptop details as JSON
    res.json(laptop);
  } catch (err) {
    console.error('❌ Error reading or parsing the laptops.json file:', err);
    res.status(500).json({ message: 'Error fetching laptop details' });
  }
};

module.exports = { getLaptops, getLaptopsById };
