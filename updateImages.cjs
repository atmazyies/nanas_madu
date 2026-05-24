const fs = require('fs');
const path = require('path');

const productsFile = 'src/data/products.js';
let content = fs.readFileSync(productsFile, 'utf8');

const imageMap = {
  "Sari Nanas Madu Premium": "jus_nanas_madu_22_11zon.jpg",
  "Nanas Madu Potong Segar": "bcf78ebe-2490-4562-9b58-b947a71d0606_21_11zon.jpg",
  "Selai Nanas Madu Organik": "placeholder.webp",
  "Manisan Nanas Madu Kering": "placeholder.webp",
  "Sirup Nanas Madu Asli": "sirup_nanas_madu_28_11zon.jpg",
  "Ekstrak Enzim Bromelain": "ekstrak_enzim_bromealin_27_11zon.jpg",
  "Keripik Nanas Madu Renyah": "kripik_nanas_madu_26_11zon.jpg",
  "Nanas Madu Sparkling Water": "nanas_madu_sparkling_water_25_11zon.jpg",
  "Nanas Madu Pemalang Utuh": "nanas_madu_utuh_24_11zon.jpg",
  "Jus Nanas Madu & Jahe": "Jus_Nanas_Mint_Detoks_2_11zon.jpg",
  "Sambal Nanas Madu Pedas": "sambal_nanas_madu_pedas_20_11zon.jpg",
  "Hampers Honea Royal Golden": "hampers_royal_garden_19_11zon.jpg",
  "Dodol Nanas Madu Pemalang": "dodol_nanas_madu_18_11zon.jpg",
  "Nanas Madu Kupas Frozen": "nanas_madu_kupas_frozen_17_11zon.jpg",
  "Jus Nanas Madu & Aloe Vera": "jus_nanas_madu_aloevera_16_11zon.jpg",
  "Cuka Nanas Madu Murni": "cuka_nanas_madu_murni_15_11zon.jpg",
  "Keripik Kaca Nanas Pedas": "keripik_kaca_nanas_pedas_14_11zon.jpg",
  "Hampers Oleh-Oleh Pemalang": "hampers_oleh_oleh_pemalang_13_11zon.jpg",
  "Nanas Madu Bubuk Organik": "nanas_madu_bubuk_organik_12_11zon.jpg",
  "Teh Herbal Kulit Nanas": "teh_herbal_kulit_nanas_11_11zon.jpg",
  "Smoothie Nanas & Mangga": "smoothie_nanas_8_11zon.jpg",
  "Asinan Nanas Madu Tropis": "asinan_nanas_madu_10_11zon.jpg",
  "Saus BBQ Nanas Madu": "saos_bbq_nanas_madu_9_11zon.jpg",
  "Paket Hemat Nanas 3 Pcs": "paket_hemat_nanas_3pcs_7_11zon.jpg",
  "Puding Jelly Nanas Madu": "puding_jelly_4_11zon.jpg",
  "Nanas Madu Kupas Spiral": "nanas_madu_kupas_spiral_3_11zon.jpg",
  "Konsentrat Nanas Madu": "konsentrat_nanas_madu_1_11zon.jpg"
};

for (const [title, imageFile] of Object.entries(imageMap)) {
  // Regex to find the product block and replace the image and first image in the array
  const regex = new RegExp(`(title:\\s*"${title}",[\\s\\S]*?image:\\s*")([^"]+)("[\\s\\S]*?images:\\s*\\[\\s*\\{\\s*id:\\s*1,\\s*src:\\s*")([^"]+)(")`, 'i');
  
  content = content.replace(regex, (match, p1, p2, p3, p4, p5) => {
    return `${p1}/images/${imageFile}${p3}/images/${imageFile}${p5}`;
  });
}

fs.writeFileSync(productsFile, content, 'utf8');
console.log('Update complete');
