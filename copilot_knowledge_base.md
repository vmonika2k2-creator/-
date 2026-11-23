# NoBroker Home Services Copilot Knowledge Base

Generated from the live catalogue data modules used by the Flask app. Use this file as the reference source for service recommendations, explanations, photo lookup, and catalogue deep links.

## Operating rules

- Match the user's issue to the most specific service name and category.
- Do not invent a photo or claim that a photo exists when the record says it is not specified.
- Prices, ratings, durations, and availability are catalogue metadata and may change; final scope and price require professional inspection where applicable.
- Photo references are the raw paths stored in the data record. Local assets live under `assets/` or `static/`.
- Use the catalogue page URL listed for the family when a user wants to browse or book.

## Service families

- **Full house cleaning** — `/full-house-cleaning` — source `full_house_data.py`
- **Kitchen cleaning** — `/kitchen-cleaning` — source `kitchen_data.py`
- **Sofa cleaning** — `/sofa-cleaning` — source `sofa_data.py`
- **Bathroom cleaning** — `/bathroom-cleaning` — source `bathroom_data.py`
- **Electrician** — `/electrician` — source `electrician_data.py`
- **Carpenter** — `/carpenter` — source `carpenter_data.py`
- **Plumber** — `/plumber` — source `plumber_data.py`
- **AC services** — `/ac-services` — source `ac_data.py`
- **Appliance services** — `/appliances` — source `appliances_data.py`
- **Painting services** — `/painting-services` — source `painting_services_data.py`
- **Premium painting** — `/premium-painting` — source `premium_painting_data.py`

## Detailed service catalogue

## Full house cleaning

- Source: `full_house_data.py`
- Catalogue page: `/full-house-cleaning`

### Essential

- **Category:** Furnished Apartment
- **ID:** `fa-essential`
- **Price:** 3609
- **Rating:** 4.75 (11.4K+)
- **Duration:** 3 hrs 45 mins
- **Included / coverage:**
  - Bathroom & kitchen deep cleaning
  - Machine cleaning of floors, doors & windows
  - Cobweb removal, ceiling & fan dusting
  - Balcony & utility area cleaning
  - Cabinet & furniture exterior dusting & wet wiping
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Premium

- **Category:** Furnished Apartment
- **ID:** `fa-premium`
- **Price:** 4099
- **Rating:** 4.7 (24.7K+)
- **Duration:** 4 hrs 15 mins
- **Included / coverage:**
  - Includes everything in Essential Plan
  - Cupboard cleaning (interior + exterior, if empty)
  - Cabinets interior with utensil removal
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Elite

- **Category:** Furnished Apartment
- **ID:** `fa-elite`
- **Price:** 4539
- **Rating:** 4.7 (16.1K+)
- **Duration:** 4 hrs 45 mins
- **Included / coverage:**
  - Includes everything in Premium plan
  - Sofa, carpet & mattress shampooing
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Essential

- **Category:** Unfurnished Apartment
- **ID:** `ua-essential`
- **Price:** 3319
- **Rating:** 4.72 (22.5K+)
- **Duration:** 3 hrs
- **Included / coverage:**
  - Bathroom & kitchen deep cleaning
  - Machine cleaning of floors, doors & windows
  - Cobweb removal, ceiling & fan dusting
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Premium

- **Category:** Unfurnished Apartment
- **ID:** `ua-premium`
- **Price:** 3949
- **Rating:** 4.63 (27.9K+)
- **Duration:** 3 hrs 40 mins
- **Included / coverage:**
  - Includes everything in Essential Plan
  - Cupboard cleaning (interior + exterior, if empty)
  - Cabinets interior with utensil removal
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Post Interior Work

- **Category:** Unfurnished Apartment
- **ID:** `ua-post`
- **Price:** 4699
- **Rating:** 4.63 (390)
- **Duration:** 6 hrs
- **Included / coverage:**
  - Includes everything in Premium Plan
  - Includes sticker, gum and garbage removal
  - Paint and stain removal with the best possible efficiency (100% removal not guaranteed)
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Essential

- **Category:** Furnished Villa
- **ID:** `fv-essential`
- **Price:** 4439
- **Rating:** 4.73 (784)
- **Duration:** 5 hrs 20 mins
- **Included / coverage:**
  - Bathroom and kitchen deep cleaning
  - Wiping and mopping of complete floor area
  - Cobweb removal and wall dry dusting
  - Balcony and utility area cleaning
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Premium

- **Category:** Furnished Villa
- **ID:** `fv-premium`
- **Price:** 6729
- **Rating:** 4.65 (982)
- **Duration:** 5 hrs 50 mins
- **Included / coverage:**
  - Bathroom and kitchen deep cleaning
  - Cobweb removal and wall dry dusting
  - Dry vacuuming of sofa, carpet and chair
  - Machine cleaning of floors, doors and windows
  - Furniture and appliances dusting and wet wiping
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Essential

- **Category:** Unfurnished Villa
- **ID:** `uv-essential`
- **Price:** 4419
- **Rating:** 4.66 (821)
- **Duration:** 5 hrs 20 mins
- **Included / coverage:**
  - Bathroom and kitchen deep cleaning
  - Wiping and mopping of complete floor area
  - Cobweb removal and wall dry dusting
  - Balcony and utility area cleaning
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Premium

- **Category:** Unfurnished Villa
- **ID:** `uv-premium`
- **Price:** 5819
- **Rating:** 4.64 (1.4K+)
- **Duration:** 5 hrs 50 mins
- **Included / coverage:**
  - Bathroom and kitchen deep cleaning
  - Cobweb removal and wall dry dusting
  - Wiping and mopping of complete floor area
  - Machine cleaning of floors, doors and windows
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Bedroom Cleaning

- **Category:** Book by Room
- **ID:** `room-bedroom`
- **Price:** 649
- **Rating:** 4.76 (4.8K+)
- **Duration:** 1 hr
- **Included / coverage:**
  - Dusting and mopping of all bedroom surfaces
  - Ideal for both empty and furnished rooms
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Living Room Cleaning

- **Category:** Book by Room
- **ID:** `room-living`
- **Price:** 899
- **Rating:** 4.72 (2.5K+)
- **Duration:** 1 hr 30 mins
- **Included / coverage:**
  - Deep cleaning of floors, furniture, and fixtures to refresh your living space
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Floor Cleaning

- **Category:** Book by Room
- **ID:** `room-floor`
- **Price:** 399
- **Rating:** 4.78 (2.4K+)
- **Duration:** 1 hr
- **Included / coverage:**
  - Thorough cleaning of tiles, grouts, and corners
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Upto 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-0`
- **Price:** 399
- **Duration:** 1 hr
- **Included / coverage:**
  - Balcony Cleaning: Upto 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Above 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-1`
- **Price:** 549
- **Duration:** 1 hr 20 mins
- **Included / coverage:**
  - Balcony Cleaning: Above 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Utensils Removal & Replacement

- **Category:** Mini Services
- **ID:** `mini-2`
- **Price:** 409
- **Duration:** 30 mins
- **Included / coverage:**
  - Utensils Removal & Replacement by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Fan Cleaning

- **Category:** Mini Services
- **ID:** `mini-3`
- **Price:** 89
- **Duration:** 15 mins
- **Included / coverage:**
  - Fan Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Ceiling Dusting & Cobweb Cleaning

- **Category:** Mini Services
- **ID:** `mini-4`
- **Price:** 179
- **Duration:** 20 mins
- **Included / coverage:**
  - Ceiling Dusting & Cobweb Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Single Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-5`
- **Price:** 379
- **Duration:** 30 mins
- **Included / coverage:**
  - Single Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Double Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-6`
- **Price:** 499
- **Duration:** 1 hr
- **Included / coverage:**
  - Double Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Upto 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-7`
- **Price:** 399
- **Duration:** 30 mins
- **Included / coverage:**
  - Window Cleaning (Upto 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Above 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-8`
- **Price:** 449
- **Duration:** 1 hr
- **Included / coverage:**
  - Window Cleaning (Above 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Cushion Cleaning

- **Category:** Mini Services
- **ID:** `mini-9`
- **Price:** 169
- **Duration:** 30 mins
- **Included / coverage:**
  - Cushion Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Microwave Cleaning

- **Category:** Mini Services
- **ID:** `mini-10`
- **Price:** 189
- **Duration:** 30 mins
- **Included / coverage:**
  - Microwave Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (6) Cleaning

- **Category:** Mini Services
- **ID:** `mini-11`
- **Price:** 549
- **Duration:** 20 mins
- **Included / coverage:**
  - Dining Table & Chairs (6) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (4) Cleaning

- **Category:** Mini Services
- **ID:** `mini-12`
- **Price:** 449
- **Duration:** 15 mins
- **Included / coverage:**
  - Dining Table & Chairs (4) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Family-level coverage

**Included:**
- Deep cleaning of living rooms, bedrooms, kitchens, bathrooms and utility areas
- Machine-assisted floor scrubbing and mopping

**Not included:**
- Repair, servicing or dismantling of appliances and fixtures
- Plumbing, electrical or maintenance work

### Family FAQs

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

## Kitchen cleaning

- Source: `kitchen_data.py`
- Catalogue page: `/kitchen-cleaning`

### Eco-Smart

- **Category:** Occupied Kitchen Cleaning
- **ID:** `occ-eco`
- **Price:** 2009
- **Rating:** 4.72 (4.5K+)
- **Duration:** 2 hrs 30 mins
- **Options:** 2 options
- **Badge:** 🌿
- **Included / coverage:**
  - Odourless eco-smart deep cleaning
  - High-pressure steam + active foam degreases tiles, slabs & gas stove/hob without fumes
  - Includes all of Power Steam cleaning (sink, cabinets, utensils, exhaust & more)
  - Non-corrosive and safe for family
- **Photo / asset location:**
  - `image: /static/img/kitchen/eco-smart.png`

### Power Steam

- **Category:** Occupied Kitchen Cleaning
- **ID:** `occ-steam`
- **Price:** 1959
- **Rating:** 4.77 (7.4K+)
- **Duration:** 3 hrs
- **Options:** 2 options
- **Included / coverage:**
  - High-pressure steam degreasing of kitchen tiles, slabs & gas stove / hob
  - Sink & under the sink, exhaust & fan dusting
  - Kitchen floors, windows & switchboard fixtures cleaning
  - Utensil removal / rearrangement included
  - Cabinet cleaning - exterior & interior
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Essential

- **Category:** Occupied Kitchen Cleaning
- **ID:** `occ-essential`
- **Price:** 1459
- **Rating:** 4.74 (5.8K+)
- **Duration:** 3 hrs
- **Options:** 2 options
- **Badge:** ⭐
- **Included / coverage:**
  - Degreasing of kitchen tiles, floor & slab, gas stove / hob
  - Sink & under-the-sink, exhaust & fan dusting
  - Kitchen floors, windows & switchboard fixtures cleaning
  - Utensil removal / rearrangement not included
  - Cabinet cleaning - exterior only
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Essential

- **Category:** Empty Kitchen Cleaning
- **ID:** `emp-essential`
- **Price:** 849
- **Rating:** 4.75 (4.5K+)
- **Duration:** 2 hrs 30 mins
- **Options:** 2 options
- **Badge:** ⭐
- **Included / coverage:**
  - Degreasing of kitchen tiles, slabs & gas stove / hob
  - Sink & under-the-sink, exhaust & fan dusting
  - Kitchen floors, windows & switchboard fixtures cleaning
  - Utensil removal / rearrangement not included
  - Cabinet cleaning - exterior only
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Power Steam

- **Category:** Empty Kitchen Cleaning
- **ID:** `emp-steam`
- **Price:** 949
- **Rating:** 4.73 (3.9K+)
- **Duration:** 2 hrs 30 mins
- **Options:** 2 options
- **Included / coverage:**
  - High-pressure steam degreasing of kitchen tiles, slabs & gas stove / hob
  - Sink & under-the-sink, exhaust & fan dusting
  - Kitchen floors, windows & switchboard fixtures cleaning
  - Utensil removal / rearrangement not included
  - Cabinet cleaning - exterior only
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Fridge Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-fridge`
- **Price:** 379
- **Rating:** 4.75 (24.8K+)
- **Duration:** 30 mins
- **Options:** 3 options
- **Included / coverage:**
  - Removing and placing back all food items
  - Cleaning of shelves and trays
  - Wiping interior & exterior surfaces
  - Removal of food stains, crumbs, and odors
- **Photo / asset location:**
  - `image: /static/img/kitchen/fridge.png`

### Chimney Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-chimney`
- **Price:** 379
- **Rating:** 4.81 (30.3K+)
- **Duration:** 30 mins
- **Included / coverage:**
  - Degreasing and stain removal of one chimney
  - Mesh and filter deep cleaning
  - Digital chimney cleaning is carried out only on the exterior
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Utility Area Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-utility`
- **Price:** 499
- **Rating:** 4.74 (1.6K+)
- **Duration:** 1 hr
- **Included / coverage:**
  - End-to-end cleaning of utility windows, appliances, and floor for a hygienic area
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Microwave Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-microwave`
- **Price:** 189
- **Rating:** 4.72 (9.3K+)
- **Duration:** 30 mins
- **Included / coverage:**
  - Deep cleaning of microwave exterior
  - Wet wiping of interior to remove stains and remove odour
  - Removing oil stain, Food stain
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Gas Stove Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-stove`
- **Price:** 89
- **Rating:** 4.78 (3.9K+)
- **Duration:** 30 mins
- **Included / coverage:**
  - Removes grease, stains, and grime from stove, burners, and knobs
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Kitchen Tiles and Slabs Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-tiles`
- **Price:** 279
- **Rating:** 4.76 (2.5K+)
- **Duration:** 30 mins
- **Included / coverage:**
  - Degreases tiles & slabs and deep cleans grout for a fresh kitchen
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Cabinet & Trolley Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-cabinet`
- **Price:** 1139
- **Rating:** 4.76 (3K+)
- **Duration:** 1 hr
- **Included / coverage:**
  - Cleaning inside of cabinets. Includes removal & placing back of items
  - Removal of oil & grease stains from cabinets exterior
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Oven, Toaster & Grill Cleaning

- **Category:** Appliances & Dedicated Cleaning
- **ID:** `ded-oven`
- **Price:** 379
- **Rating:** 4.72 (608)
- **Duration:** 15 mins
- **Included / coverage:**
  - Deep cleaning the interiors for food crumbs & spills
  - Cleaning of exterior & back panel for grease stains
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Fan Cleaning

- **Category:** Mini Services
- **ID:** `mini-0`
- **Price:** 89
- **Duration:** 15 mins
- **Included / coverage:**
  - Fan Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Utensils Removal & Replacement

- **Category:** Mini Services
- **ID:** `mini-1`
- **Price:** 409
- **Duration:** 30 mins
- **Included / coverage:**
  - Utensils Removal & Replacement by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Sink & Under Sink Cleaning

- **Category:** Mini Services
- **ID:** `mini-2`
- **Price:** 79
- **Duration:** 20 mins
- **Included / coverage:**
  - Sink & Under Sink Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Kitchen Window Cleaning

- **Category:** Mini Services
- **ID:** `mini-3`
- **Price:** 269
- **Duration:** 30 mins
- **Included / coverage:**
  - Kitchen Window Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (6) Cleaning

- **Category:** Mini Services
- **ID:** `mini-4`
- **Price:** 549
- **Duration:** 20 mins
- **Included / coverage:**
  - Dining Table & Chairs (6) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (4) Cleaning

- **Category:** Mini Services
- **ID:** `mini-5`
- **Price:** 449
- **Duration:** 15 mins
- **Included / coverage:**
  - Dining Table & Chairs (4) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Upto 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-6`
- **Price:** 399
- **Duration:** 1 hr
- **Included / coverage:**
  - Balcony Cleaning: Upto 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Above 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-7`
- **Price:** 549
- **Duration:** 1 hr 20 mins
- **Included / coverage:**
  - Balcony Cleaning: Above 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Upto 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-8`
- **Price:** 399
- **Duration:** 30 mins
- **Included / coverage:**
  - Window Cleaning (Upto 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Above 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-9`
- **Price:** 449
- **Duration:** 1 hr
- **Included / coverage:**
  - Window Cleaning (Above 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Family-level coverage

**Included:**
- Degreasing of kitchen tiles, slab, gas stove / hob, sink and exhaust
- Cleaning of kitchen floor, windows and switchboard fixtures
- Cabinet cleaning (exterior; interior in Power Steam and Eco-Smart)

**Not included:**
- Repair, servicing or dismantling of appliances and fixtures
- Plumbing, electrical or maintenance work
- Digital chimney interior cleaning

### Family FAQs

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

## Sofa cleaning

- Source: `sofa_data.py`
- Catalogue page: `/sofa-cleaning`

### Sofa Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-1`
- **Price:** 329
- **Rating:** 4.79 (36.2K+)
- **Duration:** 45 mins
- **Options:** 11 options
- **Included / coverage:**
  - Shampooing and freshen the sofa's plush seats
  - Thorough dry and wet vacuuming for deep cleaning
  - Not inclusive of cushion shampooing and vacuuming
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/sofa`

### Sofa with Cushion Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-2`
- **Price:** 599
- **Rating:** 4.84 (10.6K+)
- **Duration:** 1 hr 15 mins
- **Options:** 11 options
- **Included / coverage:**
  - Shampooing and freshen the sofa's plush seats
  - Thorough dry and wet vacuuming for deep cleaning
  - Same number of cushions are included as per seats of sofa selected
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/sofa-cushion`

### Mattress Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-3`
- **Price:** 389
- **Rating:** 4.82 (5.9K+)
- **Duration:** 30 mins
- **Options:** 2 options
- **Included / coverage:**
  - Dry and wet vacuuming, shampooing and stain removal of mattress
  - Mattress shampooing & removing hard stains.
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/mattress`

### Cushion Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-4`
- **Price:** 169
- **Rating:** 4.84 (905)
- **Duration:** 30 mins
- **Included / coverage:**
  - Wet & dry vacuuming with shampooing
  - Up to 5 cushions per booking
  - Removes dust, stains & odour
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/cushion`

### Dining Table & Chairs Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-5`
- **Price:** 449
- **Rating:** 4.8 (2.7K+)
- **Duration:** 15 mins
- **Options:** 7 options
- **Included / coverage:**
  - Dry vacuuming of cushioned chairs and wet wiping of dining table
  - Shampooing the dining chair
  - Cleaning under dining tables & chair
  - Removing touch stain, oil stain, food stain
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/dining`

### Window Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-6`
- **Price:** 399
- **Rating:** 4.74 (9.5K+)
- **Duration:** 30 mins
- **Options:** 2 options
- **Included / coverage:**
  - Thorough cleaning of your window
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/window`

### Recliner Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-7`
- **Price:** 219
- **Rating:** 4.83 (491)
- **Duration:** 20 mins
- **Options:** 3 options
- **Included / coverage:**
  - Removes stains and spillage through dry and wet vacuuming
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/recliner`

### Sofa Cum Bed Cleaning

- **Category:** Sofa cleaning
- **ID:** `sofa-8`
- **Price:** 379
- **Rating:** 4.92 (281)
- **Duration:** 40 mins
- **Options:** 4 options
- **Included / coverage:**
  - Vacuuming and foam cleaning to remove dust, dirt and common stains
  - Wood surface cleaning
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/sofa-bed`

### Carpet Cleaning

- **Category:** Carpet cleaning
- **ID:** `carpet-1`
- **Price:** 369
- **Rating:** 4.77 (6.6K+)
- **Duration:** 1 hr
- **Options:** 5 options
- **Included / coverage:**
  - Removal of accumulated dust particles, dirt, debris
  - Foam based shampooing on the carpet using a sponge
  - Vacuuming & wiping shampoo using microfibre cloth
- **Photo / asset location:**
  - `photo: /assets/sofa%20cleaning/photos/carpet`

### Sofa Center Table Cleaning

- **Category:** Mini Services
- **ID:** `mini-0`
- **Price:** 179
- **Duration:** 30 mins
- **Included / coverage:**
  - Sofa Center Table Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Study Table and Chair Cleaning

- **Category:** Mini Services
- **ID:** `mini-1`
- **Price:** 229
- **Duration:** 30 mins
- **Included / coverage:**
  - Study Table and Chair Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Fan Cleaning

- **Category:** Mini Services
- **ID:** `mini-2`
- **Price:** 89
- **Duration:** 15 mins
- **Included / coverage:**
  - Fan Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Single Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-3`
- **Price:** 379
- **Duration:** 30 mins
- **Included / coverage:**
  - Single Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Ottoman Cleaning

- **Category:** Mini Services
- **ID:** `mini-4`
- **Price:** 99
- **Duration:** 15 mins
- **Included / coverage:**
  - Ottoman Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Showcase Cleaning

- **Category:** Mini Services
- **ID:** `mini-5`
- **Price:** 199
- **Duration:** 20 mins
- **Included / coverage:**
  - Showcase Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Door Cleaning

- **Category:** Mini Services
- **ID:** `mini-6`
- **Price:** 89
- **Duration:** 10 mins
- **Included / coverage:**
  - Door Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Double Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-7`
- **Price:** 499
- **Duration:** 1 hr
- **Included / coverage:**
  - Double Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Upto 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-8`
- **Price:** 399
- **Duration:** 1 hr
- **Included / coverage:**
  - Balcony Cleaning: Upto 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning: Above 4 ft Width

- **Category:** Mini Services
- **ID:** `mini-9`
- **Price:** 549
- **Duration:** 1 hr 20 mins
- **Included / coverage:**
  - Balcony Cleaning: Above 4 ft Width by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Microwave Cleaning

- **Category:** Mini Services
- **ID:** `mini-10`
- **Price:** 189
- **Duration:** 30 mins
- **Included / coverage:**
  - Microwave Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Utensils Removal & Replacement

- **Category:** Mini Services
- **ID:** `mini-11`
- **Price:** 409
- **Duration:** 30 mins
- **Included / coverage:**
  - Utensils Removal & Replacement by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Family-level coverage

**Included:**
- Dry and wet vacuuming of sofa, cushions, carpets and mattresses
- Foam / shampoo cleaning with removal of common stains and odour
- Cleaning of dining chairs, recliners and sofa-cum-beds

**Not included:**
- Permanent or old stains that cannot be removed
- Repair or stitching of upholstery
- Moving of heavy furniture

### Family FAQs

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

## Bathroom cleaning

- Source: `bathroom_data.py`
- Catalogue page: `/bathroom-cleaning`

### Eco-Smart

- **Category:** Bathroom Cleaning
- **ID:** `bath-eco`
- **Price:** 509
- **Rating:** 4.81 (47.3K+)
- **Options:** 5 options
- **Included / coverage:**
  - Deep bathroom cleaning using eco-friendly active foam technology
  - Removes tough stains, soap scum, and grime without bleach, fumes, or residue
  - Odourless, non-corrosive, and family-safe
  - Includes machine-assisted scrubbing
- **Photo / asset location:**
  - `photo: /assets/bathroom%20cleaning/photos/eco-smart`

### Machine

- **Category:** Bathroom Cleaning
- **ID:** `bath-machine`
- **Price:** 479
- **Rating:** 4.74 (234.1K+)
- **Options:** 5 options
- **Included / coverage:**
  - Machine scrubbing of floor and tiles
  - Removal of dirt & black spots
  - Ideal for tough stain removal and deep cleaning
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Hands On

- **Category:** Bathroom Cleaning
- **ID:** `bath-hands`
- **Price:** 439
- **Rating:** 4.75 (312.6K+)
- **Duration:** 50 mins
- **Options:** 5 options
- **Included / coverage:**
  - Manual scrubbing for regular cleaning
  - Removal of dirt & black spots
  - Takes 50 mins per bathroom
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Balcony Cleaning

- **Category:** Balcony Cleaning
- **ID:** `balcony-1`
- **Price:** 399
- **Rating:** 4.78 (19.3K+)
- **Duration:** 1 hr
- **Options:** 2 options
- **Included / coverage:**
  - Sweeping & mopping of balcony floor
  - Dusting & wiping of railings, grills, and accessible walls
  - Removal of cobwebs and loose dirt
  - Cleaning of sliding door glass (inside & outside, where it's reachable)
- **Photo / asset location:**
  - `photo: /assets/bathroom%20cleaning/photos/balcony`

### Fan Cleaning

- **Category:** Mini Services
- **ID:** `mini-0`
- **Price:** 89
- **Duration:** 15 mins
- **Included / coverage:**
  - Fan Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Washbasin Cleaning

- **Category:** Mini Services
- **ID:** `mini-1`
- **Price:** 79
- **Duration:** 10 mins
- **Included / coverage:**
  - Washbasin Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Chimney Cleaning

- **Category:** Mini Services
- **ID:** `mini-2`
- **Price:** 379
- **Duration:** 30 mins
- **Included / coverage:**
  - Chimney Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Exhaust Fan Cleaning

- **Category:** Mini Services
- **ID:** `mini-3`
- **Price:** 79
- **Duration:** 20 mins
- **Included / coverage:**
  - Exhaust Fan Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Single Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-4`
- **Price:** 379
- **Duration:** 30 mins
- **Included / coverage:**
  - Single Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Mirror Cleaning

- **Category:** Mini Services
- **ID:** `mini-5`
- **Price:** 49
- **Duration:** 10 mins
- **Included / coverage:**
  - Mirror Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Double Door Fridge Cleaning

- **Category:** Mini Services
- **ID:** `mini-6`
- **Price:** 499
- **Duration:** 1 hr
- **Included / coverage:**
  - Double Door Fridge Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Upto 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-7`
- **Price:** 399
- **Duration:** 30 mins
- **Included / coverage:**
  - Window Cleaning (Upto 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Window Cleaning (Above 4 Ft X 4 Ft)

- **Category:** Mini Services
- **ID:** `mini-8`
- **Price:** 449
- **Duration:** 1 hr
- **Included / coverage:**
  - Window Cleaning (Above 4 Ft X 4 Ft) by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Microwave Cleaning

- **Category:** Mini Services
- **ID:** `mini-9`
- **Price:** 189
- **Duration:** 30 mins
- **Included / coverage:**
  - Microwave Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (6) Cleaning

- **Category:** Mini Services
- **ID:** `mini-10`
- **Price:** 549
- **Duration:** 20 mins
- **Included / coverage:**
  - Dining Table & Chairs (6) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Dining Table & Chairs (4) Cleaning

- **Category:** Mini Services
- **ID:** `mini-11`
- **Price:** 449
- **Duration:** 15 mins
- **Included / coverage:**
  - Dining Table & Chairs (4) Cleaning by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Utensils Removal & Replacement

- **Category:** Mini Services
- **ID:** `mini-12`
- **Price:** 409
- **Duration:** 30 mins
- **Included / coverage:**
  - Utensils Removal & Replacement by a trained, background-verified partner
- **Photo / asset location:** Not specified on the individual record; use the family/category hero or banner asset.

### Family-level coverage

**Included:**
- Scrubbing of floor, tiles and fittings; removal of dirt, soap scum and black spots
- Cleaning of washbasin, toilet seat, taps, mirror and accessible surfaces
- Machine-assisted scrubbing in Machine and Eco-Smart plans

**Not included:**
- Plumbing, leakage or fitting repairs
- Permanent stains or damaged tiles
- Cleaning of ceiling tiles or false ceilings

### Family FAQs

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

#### Not specified

Not specified

## Electrician

- Source: `electrician_data.py`
- Catalogue page: `/electrician`

### Geyser Service

- **Category:** Geyser
- **ID:** `Not specified`
- **Price:** 475
- **Rating:** 4.76 (4.8K+)
- **Price label:** Starts at
- **Service details:**
  - Thorough cleaning and descaling
  - Helps improve heating efficiency and machine life
  - Minor wiring up to 2m included
- **Photo / asset location:**
  - `image: 2`

### Geyser Installation

- **Category:** Geyser
- **ID:** `Not specified`
- **Price:** 386
- **Rating:** 4.8 (4.3K+)
- **Price label:** Starts at
- **Service details:**
  - Installation of one geyser
  - Material charges additional, if any
- **Photo / asset location:**
  - `image: 3`

### Geyser Check-Up

- **Category:** Geyser
- **ID:** `Not specified`
- **Price:** 141
- **Rating:** 4.74 (6.9K+)
- **Badge:** 43% off
- **Old price:** 249
- **Photo / asset location:**
  - `image: 4`

### Geyser Uninstallation

- **Category:** Geyser
- **ID:** `Not specified`
- **Price:** 288
- **Rating:** 4.79 (562)
- **Badge:** 28% off
- **Old price:** 399
- **Photo / asset location:**
  - `image: 5`

### At Home Consultation

- **Category:** Book an Electrician
- **ID:** `Not specified`
- **Price:** 48
- **Rating:** 4.74 (16.9K+)
- **Badge:** 13% off
- **Old price:** 55
- **Service details:**
  - On-site expert evaluation with an instant price quote
  - Inspection amount is adjusted in the final price
- **Photo / asset location:**
  - `image: 3`

### Tube Light Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 91
- **Rating:** 4.88 (6.4K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### Ceiling Light Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 139
- **Rating:** 4.84 (1.7K+)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### Bulb & Bulb Holder Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 71
- **Rating:** 4.81 (2.9K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### CFL to LED Replacement

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 91
- **Rating:** 4.82 (594)
- **Duration:** 30 mins
- **Service details:**
  - Replacement of CFL bulb or tube light with LED
- **Photo / asset location:**
  - `image: 4`

### Wall Mounted Lights Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 120
- **Rating:** 4.82 (1.6K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Service details:**
  - Decorative, bathroom or bedside light installation
- **Photo / asset location:**
  - `image: 5`

### Outdoor Lights Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 91
- **Rating:** 4.95 (55)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 6`

### Hanging Lights Install

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 187
- **Rating:** 4.77 (141)
- **Duration:** 1 hr
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 7`

### Chandelier Install / Replace

- **Category:** Light
- **ID:** `Not specified`
- **Price:** 683
- **Rating:** 4.75 (412)
- **Duration:** 1 hr 30 mins
- **Price label:** Starts at
- **Service details:**
  - Installation of one chandelier with bulbs
- **Photo / asset location:**
  - `image: 8`

### Balcony Lights Installation

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 238
- **Rating:** 4.58 (373)
- **Duration:** 1 hr
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### Railing Lights Installation

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 238
- **Rating:** 4.54 (58)
- **Duration:** 1 hr
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### Mandir Lights Installation

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 127
- **Rating:** 4.48 (39)
- **Duration:** 1 hr
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### Light Uninstallation (per light)

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 127
- **Rating:** 4.77 (159)
- **Duration:** 30 mins
- **Photo / asset location:**
  - `image: 4`

### Light Installation (per string)

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 127
- **Rating:** 4.73 (1.6K+)
- **Duration:** 30 mins
- **Photo / asset location:**
  - `image: 5`

### Lantern Installation (per lantern)

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 127
- **Rating:** 4.59 (65)
- **Duration:** 30 mins
- **Photo / asset location:**
  - `image: 6`

### Outdoor Festive Lights Installation

- **Category:** Wedding Lights
- **ID:** `Not specified`
- **Price:** 1705
- **Rating:** 4.66 (9)
- **Duration:** 2 hrs
- **Badge:** New
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 7`

### Switch Replace / Install

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 72
- **Rating:** 4.86 (7.9K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### Socket Replace / Install

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 72
- **Rating:** 4.86 (4K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### Full Switchboard Installation

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 119
- **Rating:** 4.78 (3.2K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### Full Switchboard Repair / Replace

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 139
- **Rating:** 4.82 (7.9K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 4`

### External Switchbox Installation

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 188
- **Rating:** 4.77 (124)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 5`

### Fan Regulator Replace / Install

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 82
- **Rating:** 4.6 (66)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 6`

### Plug Replacement

- **Category:** Switch & socket
- **ID:** `Not specified`
- **Price:** 82
- **Rating:** 4.83 (774)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 7`

### Fan Repair

- **Category:** Fan
- **ID:** `Not specified`
- **Price:** 210
- **Rating:** 4.76 (13.9K+)
- **Price label:** Starts at
- **Service details:**
  - Inspection and repair for a ceiling, wall or exhaust fan
- **Photo / asset location:**
  - `image: 1`

### Fan Replacement

- **Category:** Fan
- **ID:** `Not specified`
- **Price:** 222
- **Rating:** 4.88 (3.9K+)
- **Price label:** Starts at
- **Service details:**
  - Replacement of a ceiling, wall or exhaust fan
- **Photo / asset location:**
  - `image: 2`

### Fan Regulator Replacement

- **Category:** Fan
- **ID:** `Not specified`
- **Price:** 82
- **Rating:** 4.83 (3.2K+)
- **Duration:** 30 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### Fan Uninstallation

- **Category:** Fan
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.89 (2.1K+)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 4`

### Fan Installation

- **Category:** Fan
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.84 (10K+)
- **Price label:** Starts at
- **Service details:**
  - Installation of a ceiling, wall or exhaust fan
- **Photo / asset location:**
  - `image: 5`

### TV Installation

- **Category:** TV
- **ID:** `Not specified`
- **Price:** 380
- **Rating:** 4.86 (7.4K+)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### TV Uninstallation

- **Category:** TV
- **ID:** `Not specified`
- **Price:** 331
- **Rating:** 4.89 (1.2K+)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### TV Socket Installation

- **Category:** TV
- **ID:** `Not specified`
- **Price:** 82
- **Duration:** 30 mins
- **Badge:** New
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### Sound Bar Installation

- **Category:** TV
- **ID:** `Not specified`
- **Price:** 188
- **Rating:** 4.76 (140)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 4`

### Home Theatre Installation

- **Category:** TV
- **ID:** `Not specified`
- **Price:** 235
- **Rating:** 4.73 (203)
- **Duration:** 45 mins
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 5`

### MCB Fuse Replacement

- **Category:** MCB & Fuse
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.77 (1.4K+)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### Sub Meter Installation

- **Category:** MCB & Fuse
- **ID:** `Not specified`
- **Price:** 387
- **Rating:** 4.75 (153)
- **Price label:** Starts at
- **Service details:**
  - Includes minor wiring work
- **Photo / asset location:**
  - `image: 2`

### 3-Phase Changeover Switch Installation

- **Category:** MCB & Fuse
- **ID:** `Not specified`
- **Price:** 269
- **Rating:** 4.54 (114)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### MCB Installation

- **Category:** MCB & Fuse
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.8 (870)
- **Price label:** Starts at
- **Service details:**
  - Single, double or four pole MCB installation
- **Photo / asset location:**
  - `image: 4`

### Inverter Servicing

- **Category:** Inverter & Stabilizer
- **ID:** `Not specified`
- **Price:** 242
- **Rating:** 4.66 (1.4K+)
- **Price label:** Starts at
- **Service details:**
  - Terminal dust removal and distilled water top-up
- **Photo / asset location:**
  - `image: 1`

### Stabilizer Installation

- **Category:** Inverter & Stabilizer
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.86 (726)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### Inverter Fuse Replacement

- **Category:** Inverter & Stabilizer
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.58 (179)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 3`

### Inverter Installation

- **Category:** Inverter & Stabilizer
- **ID:** `Not specified`
- **Price:** 470
- **Rating:** 4.69 (1.4K+)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 4`

### Wiring Installation

- **Category:** Wiring
- **ID:** `Not specified`
- **Price:** 115
- **Rating:** 4.75 (3.2K+)
- **Price label:** Starts at
- **Service details:**
  - Concealed conduit internal wiring for a new connection
- **Photo / asset location:**
  - `image: 1`

### Wireless CCTV Installation

- **Category:** Wiring
- **ID:** `Not specified`
- **Price:** 290
- **Rating:** 4.65 (633)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

### Doorbell Installation / Replacement

- **Category:** Door bell
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.82 (1.8K+)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### EV Charger Installation

- **Category:** EV Charger
- **ID:** `Not specified`
- **Price:** 878
- **Rating:** 4.72 (91)
- **Duration:** 1 hr 30 mins
- **Badge:** Eco
- **Price label:** Starts at
- **Service details:**
  - Installation of one charging station and switch box
- **Photo / asset location:**
  - `image: 1`

### Air Cooler Check Up

- **Category:** Air Cooler
- **ID:** `Not specified`
- **Price:** 249
- **Rating:** 4.67 (74)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 1`

### Air Cooler Full Service

- **Category:** Air Cooler
- **ID:** `Not specified`
- **Price:** 599
- **Rating:** 4.79 (43)
- **Price label:** Starts at
- **Photo / asset location:**
  - `image: 2`

## Carpenter

- Source: `carpenter_data.py`
- Catalogue page: `/carpenter`

### Door Lock Repair & Install

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 92
- **Rating:** 4.81 · 8.2K+
- **Starts at:** No
- **Description:** Repair, installation, or replacement of a door lock
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Wooden Door Repair

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.78 · 5.7K+
- **Starts at:** No
- **Description:** Alignment fixing, sanding, scraping and door jamb repair
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Sliding Door Repair

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 290
- **Rating:** 4.72 · 1.4K+
- **Starts at:** No
- **Description:** Repair of sliding door channels or bearing replacement
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Overhead Door Closure

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 174
- **Rating:** 4.68 · 500
- **Starts at:** No
- **Description:** Installation of one overhead door closure
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Door Dismantling

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 243
- **Rating:** 4.69 · 487
- **Starts at:** No
- **Description:** Safe dismantling of a wooden door
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Wooden Door Installation

- **Category:** Door
- **ID:** `Not specified`
- **Price:** 775
- **Rating:** 4.38 · 421
- **Starts at:** No
- **Description:** Installation and alignment of a wooden door
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Wooden Shelf Installation

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.83 · 2.9K+
- **Starts at:** No
- **Description:** Secure installation of a wooden wall shelf
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Bathroom Mirror Installation

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 115
- **Rating:** 4.83 · 2.4K+
- **Starts at:** No
- **Description:** Wall mounting and alignment for a bathroom mirror
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Towel Rod Installation

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.78 · 1.5K+
- **Starts at:** No
- **Description:** Drilling and installation of a towel rod
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Glass Shelf Installation

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 135
- **Rating:** 4.74 · 787
- **Starts at:** No
- **Description:** Installation of a wall-mounted glass shelf
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Bath Fittings Installation

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.77 · 837
- **Starts at:** No
- **Description:** Fitting and securing bathroom accessories
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Drill (Per Hole)

- **Category:** Drill & hang
- **ID:** `Not specified`
- **Price:** 71
- **Rating:** 4.86 · 11.8K+
- **Starts at:** Yes
- **Description:** Drilling for hooks, shelves and other wall fittings
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Channel Installation / Replacement

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 122
- **Rating:** 4.77 · 2.8K+
- **Starts at:** No
- **Description:** Installation or replacement of a drawer channel
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Channel Repair

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 125
- **Rating:** 4.80 · 3K+
- **Starts at:** No
- **Description:** Repair of jammed or misaligned drawer channels
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Cupboard Hinge Repair / Replacement

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 125
- **Rating:** 4.81 · 7.1K+
- **Starts at:** No
- **Description:** Repair or replacement of cupboard hinges
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Cupboard Sliding Door Repair

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 261
- **Rating:** 4.80 · 1.4K+
- **Starts at:** No
- **Description:** Fixing sliding cupboard doors and tracks
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Cupboard Handle Installation

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 86
- **Rating:** 4.80 · 1.3K+
- **Starts at:** No
- **Description:** Installation or replacement of cupboard handles
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Cupboard & Drawer Locks

- **Category:** Cupboard and Drawer
- **ID:** `Not specified`
- **Price:** 92
- **Rating:** 4.75 · 959
- **Starts at:** Yes
- **Description:** Repair and installation of cupboard locks
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Curtain Rod Installation

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.82 · 4.9K+
- **Starts at:** No
- **Description:** Mounting and alignment of a curtain rod
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Window Closing (Post-AC Removal)

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 164
- **Rating:** 4.71 · 211
- **Starts at:** No
- **Description:** Closing and finishing the window opening after AC removal
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Window AC Frame Installation

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 339
- **Rating:** 4.47 · 77
- **Starts at:** No
- **Description:** Installation of a window air-conditioner frame
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Shower Curtain Rod Installation

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.72 · 147
- **Starts at:** No
- **Description:** Mounting and securing of a shower curtain rod
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Window Hinge Installation

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.77 · 178
- **Starts at:** No
- **Description:** Fitting or replacing window hinges
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Window Misalignment / Jam Repair

- **Category:** Windows & curtain
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.55 · 181
- **Starts at:** No
- **Description:** Adjustment for a stuck or misaligned window
- **Photo / asset location:**
  - `photo: door`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Cot Assembly

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 387
- **Rating:** 4.82 · 120
- **Starts at:** No
- **Description:** Assembly and tightening of a cot frame
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Bed Support Repair

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 290
- **Rating:** 4.79 · 1.8K+
- **Starts at:** No
- **Description:** Repair of bed support, slats or joints
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Headboard Repair

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.76 · 421
- **Starts at:** No
- **Description:** Fixing a loose or damaged headboard
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Loft Bed / Bunk Bed Assembly

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 901
- **Rating:** 4.80 · 81
- **Starts at:** No
- **Description:** Assembly and safety check for a bunk or loft bed
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Single Bed Assembly

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 436
- **Rating:** 4.89 · 488
- **Starts at:** Yes
- **Description:** Assembly of a single bed frame
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Double Bed Assembly

- **Category:** Bed
- **ID:** `Not specified`
- **Price:** 581
- **Rating:** 4.89 · 2.3K+
- **Starts at:** Yes
- **Description:** Assembly of a double bed frame
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Study / Workspace Table Assembly

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 436
- **Rating:** 4.87 · 1.2K+
- **Starts at:** Yes
- **Description:** Assembly of a study or workspace table
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Table / Chair Wheel Fitting

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 48
- **Rating:** 4.72 · 575
- **Starts at:** No
- **Description:** Fitting or replacement of furniture wheels
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Plastic Buffer Installation

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 48
- **Rating:** 4.63 · 231
- **Starts at:** No
- **Description:** Installation of protective furniture buffers
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Utensil Rack Assembly

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 261
- **Rating:** 4.84 · 77
- **Starts at:** No
- **Description:** Assembly and fitting of a kitchen utensil rack
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Wall Cabinet Assembly & Installation

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 242
- **Rating:** 4.69 · 521
- **Starts at:** Yes
- **Description:** Assembly and installation of wall cabinets
- **Photo / asset location:**
  - `photo: cabinet`
  - `photo_path: carpenter/cabinet-repair.jpg`

### Shoe Cabinet Assembly

- **Category:** Furniture Assembly
- **ID:** `Not specified`
- **Price:** 290
- **Rating:** 4.80 · 559
- **Starts at:** Yes
- **Description:** Assembly and placement of a shoe cabinet
- **Photo / asset location:**
  - `photo: assembly`
  - `photo_path: carpenter/furniture-assembly.webp`

### Single Door Wardrobe Assembly

- **Category:** Wardrobe
- **ID:** `Not specified`
- **Price:** 581
- **Rating:** 4.68 · 91
- **Starts at:** No
- **Description:** Assembly of a single-door wardrobe
- **Photo / asset location:**
  - `photo: wardrobe`
  - `photo_path: carpenter/wardrobe-assembly.jpg`

### Double Door Wardrobe Assembly

- **Category:** Wardrobe
- **ID:** `Not specified`
- **Price:** 824
- **Rating:** 4.81 · 197
- **Starts at:** No
- **Description:** Assembly and alignment of a double-door wardrobe
- **Photo / asset location:**
  - `photo: wardrobe`
  - `photo_path: carpenter/wardrobe-assembly.jpg`

### Three Door Wardrobe Assembly

- **Category:** Wardrobe
- **ID:** `Not specified`
- **Price:** 921
- **Rating:** 4.76 · 323
- **Starts at:** No
- **Description:** Assembly and alignment of a three-door wardrobe
- **Photo / asset location:**
  - `photo: wardrobe`
  - `photo_path: carpenter/wardrobe-assembly.jpg`

### Four Door Wardrobe Assembly

- **Category:** Wardrobe
- **ID:** `Not specified`
- **Price:** 1018
- **Rating:** 4.72 · 126
- **Starts at:** No
- **Description:** Assembly and alignment of a four-door wardrobe
- **Photo / asset location:**
  - `photo: wardrobe`
  - `photo_path: carpenter/wardrobe-assembly.jpg`

## Plumber

- Source: `plumber_data.py`
- Catalogue page: `/plumber`

### Flush Tank Repair

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 190
- **Rating:** 4.7 · 12.5K+
- **Duration:** 1 hr
- **Starts at:** Yes
- **Description:** Repair of common flush tank problems and water flow issues.
- **Photo / asset location:**
  - `photo_path: plumber/figma/61ec20ed-d3fc-4855-a5c3-1b24203e9f9b.png`

### Jet Spray Replace / Install / Repair

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 189
- **Rating:** 4.8 · 9.2K+
- **Duration:** 45 mins
- **Starts at:** Yes
- **Description:** Repair, replacement or installation of a jet spray.
- **Photo / asset location:**
  - `photo_path: plumber/figma/54ee96d1-6043-4c51-a142-cd7c5329a35b.png`

### Toilet Seat Cover

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 142
- **Rating:** 4.79 · 2.6K+
- **Duration:** 45 mins
- **Starts at:** Yes
- **Description:** Repair or installation of a toilet seat cover.
- **Photo / asset location:**
  - `photo_path: plumber/figma/519db5ec-08ab-4947-a4f9-8bbb44eaf885.png`

### External Flush Tank Replace / Install

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 437
- **Rating:** 4.77 · 963
- **Duration:** 1 hr
- **Starts at:** Yes
- **Description:** Replacement or installation of an external flush tank.
- **Photo / asset location:**
  - `photo_path: plumber/figma/08670af1-63a0-4c48-aee1-b89dc247733f.png`

### Toilet Repair

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 585
- **Rating:** 4.72 · 350
- **Duration:** 1 hr
- **Starts at:** Yes
- **Description:** Diagnosis and repair of common toilet problems.
- **Photo / asset location:**
  - `photo_path: plumber/figma/b864bab6-5017-4e3c-8131-38b602040817.png`

### Toilet Replacement / Installation

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 1842
- **Rating:** 4.64 · 439
- **Duration:** 1 hr
- **Starts at:** Yes
- **Description:** Replacement and installation of a toilet.
- **Photo / asset location:**
  - `photo_path: plumber/figma/b864bab6-5017-4e3c-8131-38b602040817.png`

### Toilet Pot Blockage Removal

- **Category:** Toilet
- **ID:** `Not specified`
- **Price:** 1173
- **Rating:** 4.53 · 588
- **Duration:** 45 mins
- **Starts at:** Yes
- **Description:** Removal of blockage from the toilet pot.
- **Photo / asset location:**
  - `photo_path: plumber/figma/b7b08249-b508-486a-bbe1-bba1212c92d2.png`

### Tap Repair

- **Category:** Tap & Mixer
- **ID:** `Not specified`
- **Price:** 246
- **Rating:** 4.79 · 18.4K+
- **Duration:** 30 mins
- **Starts at:** Yes
- **Description:** Repair of leaking, loose or faulty taps.
- **Photo / asset location:**
  - `photo_path: plumber/figma/868cb5bd-1f31-4a9c-8415-5f9634f09e27.png`

### Tap Replace / Install

- **Category:** Tap & Mixer
- **ID:** `Not specified`
- **Price:** 246
- **Rating:** 4.65 · 884
- **Duration:** 45 mins
- **Starts at:** Yes
- **Description:** Replacement or installation of a tap.
- **Photo / asset location:**
  - `photo_path: plumber/figma/18b2ebe7-329b-4b4f-8861-db34589ec155.png`

### Tap Accessory Install

- **Category:** Tap & Mixer
- **ID:** `Not specified`
- **Price:** 159
- **Rating:** 4.81 · 1.3K+
- **Duration:** 30 mins
- **Starts at:** Yes
- **Description:** Installation of common tap accessories.
- **Photo / asset location:**
  - `photo_path: plumber/figma/810d168f-1388-4d77-a8b9-3bd99437da26.png`

### Wash Basin Blockage Removal

- **Category:** Basin & Sink
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.76 · 4.5K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Clearing clogs or water flow blockages from the wash basin drain or pipe.
- **Photo / asset location:**
  - `photo_path: plumber/figma/7af9b436-1db9-4748-b736-988716894c98.png`

### Wash Basin Leakage Repair

- **Category:** Basin & Sink
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.74 · 5.8K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Fixing water leakage issues from the wash basin faucet, drain, or pipe connections.
- **Photo / asset location:**
  - `photo_path: plumber/figma/f148f561-3580-4476-8dd9-6dd19fecea0e.png`

### Wash Basin Installation

- **Category:** Basin & Sink
- **ID:** `Not specified`
- **Price:** 455
- **Rating:** 4.7 · 1.8K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation of all kinds of wash basins and sinks.
- **Photo / asset location:**
  - `photo_path: plumber/figma/b26fe442-0767-4836-b428-d60eb663ede4.png`

### Drainage Pipe Blockage Removal

- **Category:** Drainage Pipe
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.71 · 4.2K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Unclogging and removal of in-pipe blockage.
- **Photo / asset location:**
  - `photo_path: plumber/figma/9f2fb86b-7003-45de-a721-6f35e44ee6b9.png`

### Balcony Drain Blockage Removal

- **Category:** Drainage Pipe
- **ID:** `Not specified`
- **Price:** 339
- **Rating:** 4.77 · 1.8K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Cleaning of drain and floor trap to remove blockage.
- **Photo / asset location:**
  - `photo_path: plumber/figma/f94d1732-2026-4f45-9aba-a92d61c1dfce.png`

### Drain Cover Installation

- **Category:** Drainage Pipe
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.72 · 758
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation of a drain cover.
- **Photo / asset location:**
  - `photo_path: plumber/figma/397e016a-bce3-47d2-81ed-5fe014bbc5a1.png`

### Washing Machine Inlet

- **Category:** Water pipe connection
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.83 · 4.4K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation or replacement of one inlet pipe.
- **Photo / asset location:**
  - `photo_path: plumber/figma/b87d2229-fd65-4935-9913-7ea667a8b4d3.png`

### Connection Hose Installation

- **Category:** Water pipe connection
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.75 · 2K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation of a connection hose for inlet and outlet linkage.
- **Photo / asset location:**
  - `photo_path: plumber/figma/1a9d931e-cb2c-4432-8ce3-97b676333a5c.png`

### Geyser Connection Pipe Repair

- **Category:** Water pipe connection
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.76 · 1.1K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Repair or replacement of geyser connecting pipes; geyser installation is not included.
- **Photo / asset location:**
  - `photo_path: plumber/figma/959a2763-44ce-4e08-a9e6-da8e4518b482.png`

### Shut-Off Valve Leakage

- **Category:** Water pipe connection
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.7 · 734
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Repair of a leaking shut-off valve.
- **Photo / asset location:**
  - `photo_path: plumber/figma/c39c242c-ec70-4133-8fac-14fbd9d40d73.png`

### Minor Fittings Installation

- **Category:** Bath & Shower
- **ID:** `Not specified`
- **Price:** 115
- **Rating:** 4.73 · 765
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Covers small fittings such as towel hangers, holders, towel shelves, and soap dispensers.
- **Photo / asset location:**
  - `photo_path: plumber/figma/2af17771-0b2c-4021-a30a-8994ebcf8a5a.png`

### Bath Accessory Installation

- **Category:** Bath & Shower
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.68 · 239
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation of common bath accessories.
- **Photo / asset location:**
  - `photo_path: plumber/figma/a36c4053-b80f-41ae-8bd2-e444f3cb0ab0.png`

### Shower Filter Installation

- **Category:** Bath & Shower
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.85 · 513
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Installation of a shower filter.
- **Photo / asset location:**
  - `photo_path: plumber/figma/a5b8815b-38ae-452a-929b-df47ad69dd1d.png`

### Shower Repair

- **Category:** Bath & Shower
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.73 · 857
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Repair of shower fittings and water flow issues.
- **Photo / asset location:**
  - `photo_path: plumber/figma/70c0ca2a-e742-4f59-95a7-94bfa14ef22c.png`

### Shower Installation

- **Category:** Bath & Shower
- **ID:** `Not specified`
- **Price:** 135
- **Rating:** 4.79 · 1.5K+
- **Duration:** Visit scheduled after booking
- **Starts at:** Yes
- **Description:** Installation of a wall or ceiling-mounted shower.
- **Photo / asset location:**
  - `photo_path: plumber/figma/49ff89d7-dce3-444b-9a0e-d5694715e4ba.png`

### At Home Consultation

- **Category:** Book a Plumber
- **ID:** `Not specified`
- **Price:** 48
- **Rating:** 4.68 · 19.8K+
- **Duration:** Visit scheduled after booking
- **Starts at:** Yes
- **Description:** An expert plumber assesses the issue on arrival. Inspection amount is adjusted in the final price.
- **Photo / asset location:**
  - `photo_path: plumber/figma/c3f9d05d-ebc4-4bc8-828b-c5efb426d826.png`

### Pipeline Leakage Repair

- **Category:** Water Tank
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.68 · 1.6K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Repair of one faulty galvanized iron or PVC pipe.
- **Photo / asset location:**
  - `photo_path: plumber/figma/07b0c8df-020f-4795-82cf-96158c837e56.png`

### Motor Air Cavity Removal

- **Category:** Water Tank
- **ID:** `Not specified`
- **Price:** 96
- **Rating:** 4.5 · 479
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Removal of an air cavity from a water motor line.
- **Photo / asset location:**
  - `photo_path: plumber/figma/a6835722-469a-4795-8411-a64da7dd47ab.png`

### Overhead Tank Leakage Repair

- **Category:** Water Tank
- **ID:** `Not specified`
- **Price:** 145
- **Rating:** 4.45 · 202
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Leakage repair for an overhead tank and water level controller.
- **Photo / asset location:**
  - `photo_path: plumber/figma/ae0b54f8-e891-4f20-a063-4075e398568d.png`

### Overhead Tank Installation

- **Category:** Water Tank
- **ID:** `Not specified`
- **Price:** 883
- **Rating:** 4.66 · 95
- **Duration:** Visit scheduled after booking
- **Starts at:** Yes
- **Description:** Installation of one overhead water tank.
- **Photo / asset location:**
  - `photo_path: plumber/figma/5dce71ee-5152-490f-a5d7-c875d4f36e29.png`

### Motor Installation / Replacement

- **Category:** Water Tank
- **ID:** `Not specified`
- **Price:** 436
- **Rating:** 4.53 · 272
- **Duration:** Visit scheduled after booking
- **Starts at:** Yes
- **Description:** Installation or replacement of a water motor.
- **Photo / asset location:**
  - `photo_path: plumber/figma/7856ec7b-48ed-4f4f-93f9-5f11209577ca.png`

### Bathroom Grouting

- **Category:** Grouting
- **ID:** `Not specified`
- **Price:** 1800
- **Rating:** 4.44 · 1.4K+
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Grouting and tile gap filling for one bathroom; machine work is not included.
- **Photo / asset location:**
  - `photo_path: plumber/figma/1ea5f740-073c-41b9-b3ae-e6e8bb1ddaa2.png`

### Kitchen Grouting

- **Category:** Grouting
- **ID:** `Not specified`
- **Price:** 1800
- **Rating:** 4.63 · 434
- **Duration:** Visit scheduled after booking
- **Starts at:** No
- **Description:** Grouting and tile gap filling for one kitchen; machine work is not included.
- **Photo / asset location:**
  - `photo_path: plumber/figma/3e61a70e-a326-4f7b-963b-c4d265d12d05.png`

## AC services

- Source: `ac_data.py`
- Catalogue page: `/ac-services`

### Foam Blast AC Service

- **Category:** AC Maintenance Service
- **ID:** `Not specified`
- **Price:** 629
- **Rating:** 4.79
- **Reviews:** 72.4K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Ultra Max Cooling · Deep cleaning with foam jet spray for faster and more efficient cooling.
- **Photo / asset location:**
  - `photo_path: ac/figma/49135b03-5d71-4a9e-85e8-0792adc4eedd.png`

### Premium AC Service

- **Category:** AC Maintenance Service
- **ID:** `Not specified`
- **Price:** 539
- **Rating:** 4.71
- **Reviews:** 82K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** High-pressure jet cleaning removes dust and debris to improve airflow.
- **Photo / asset location:**
  - `photo_path: ac/figma/8066acaa-3214-4313-81db-446a03a17011.png`

### Anti Rust AC Service

- **Category:** AC Maintenance Service
- **ID:** `Not specified`
- **Price:** 729
- **Rating:** 4.79
- **Reviews:** 4.5K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Protects AC coils from corrosion and helps reduce the risk of gas leakage.
- **Photo / asset location:**
  - `photo_path: ac/figma/7049cfcd-a986-4ac5-bbac-5d4880288e63.png`

### AC Inspection

- **Category:** AC Repair
- **ID:** `Not specified`
- **Price:** 289
- **Rating:** 4.62
- **Reviews:** 34.9K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Accurate diagnosis and a comprehensive inspection help detect and resolve AC issues efficiently.
- **Photo / asset location:**
  - `photo_path: ac/figma/086a1d7a-d903-4011-ae50-f282cce5e290.png`

### Noise Reduction Repair

- **Category:** AC Repair
- **ID:** `Not specified`
- **Price:** 349
- **Rating:** 4.75
- **Reviews:** 1.3K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Indoor and outdoor units are checked to identify the cause of unusual AC noise.
- **Photo / asset location:**
  - `photo_path: ac/figma/ad58a2f3-6054-4ea3-8fea-101c0c70067f.png`

### Water Leakage Repair

- **Category:** AC Repair
- **ID:** `Not specified`
- **Price:** 519
- **Rating:** 4.81
- **Reviews:** 7.2K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Inspection of water leakage, slope issues and drain blockages to find the cause.
- **Photo / asset location:**
  - `photo_path: ac/figma/c123453d-a9b0-4f6b-bdb8-6b2f64a551c7.png`

### AC Uninstallation

- **Category:** AC Installation / Uninstallation
- **ID:** `Not specified`
- **Price:** 629
- **Rating:** 4.78
- **Reviews:** 15.4K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Safe dismantling of indoor and outdoor AC units.
- **Photo / asset location:**
  - `photo_path: ac/figma/4c7583ff-d4fb-4ad9-9a61-60a826251070.png`

### AC Installation

- **Category:** AC Installation / Uninstallation
- **ID:** `Not specified`
- **Price:** 779
- **Rating:** 4.56
- **Reviews:** 17.3K+
- **Starts at:** Yes
- **Options:** 2
- **Description:** Professional installation of both indoor and outdoor units.
- **Photo / asset location:**
  - `photo_path: ac/figma/c58b9f3b-55b8-4fff-9a39-9a69d5429b9e.png`

### AC Gas Refill & Check-Up

- **Category:** AC Gas Charging
- **ID:** `Not specified`
- **Price:** 2749
- **Rating:** 4.68
- **Reviews:** 32.7K+
- **Starts at:** No
- **Options:** 2
- **Description:** Comprehensive inspection, gas leak detection and repair, plus refrigerant refill for reliable system performance.
- **Photo / asset location:**
  - `photo_path: ac/figma/44b4c244-3ae7-49a8-b312-15274bcb9e9a.png`

## Appliance services

- Source: `appliances_data.py`
- Catalogue page: `/appliances`

### Washing Machine Checkup

- **Category:** Washing Machine
- **ID:** `Not specified`
- **Price:** 199
- **Rating:** 4.80
- **Reviews:** 13.1K+
- **Options:** 3
- **Description:** Complete diagnosis of the washing machine. Spare parts are charged separately; service warranty of 180 days.
- **Photo / asset location:**
  - `photo_path: appliences/washing-machine-checkup.webp`

### Washing Machine Installation

- **Category:** Washing Machine
- **ID:** `Not specified`
- **Price:** 359
- **Rating:** 4.84
- **Reviews:** 2.3K+
- **Options:** 1
- **Description:** Professional installation and setup for your washing machine.
- **Photo / asset location:**
  - `photo_path: appliences/washing-machine-installation.webp`

### Washing Machine Uninstallation

- **Category:** Washing Machine
- **ID:** `Not specified`
- **Price:** 359
- **Rating:** 4.83
- **Reviews:** 100+
- **Options:** 1
- **Description:** Safe disconnection and removal of your washing machine.
- **Photo / asset location:**
  - `photo_path: appliences/washing-machine-banner.webp`

### Washing Machine Descaling Service

- **Category:** Washing Machine
- **ID:** `Not specified`
- **Price:** 799
- **Rating:** 4.75
- **Reviews:** 30+
- **Options:** 2
- **Description:** Remove limescale and hard-water buildup from internal components.
- **Photo / asset location:**
  - `photo_path: appliences/washing-machine-checkup.webp`

### Washing Machine Deep-Clean Service

- **Category:** Washing Machine
- **ID:** `Not specified`
- **Price:** 958
- **Rating:** 4.72
- **Reviews:** 163+
- **Options:** 2
- **Description:** Deep cleaning of the drum, filters, and internal parts with a jet spray.
- **Photo / asset location:**
  - `photo_path: appliences/washing-machine-installation.webp`

### Double Door Check-Up

- **Category:** Refrigerator
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.74
- **Reviews:** 3.9K+
- **Options:** 2
- **Description:** Complete diagnosis of your refrigerator to identify repair needs. Spare parts are charged separately; 180-day service warranty.
- **Photo / asset location:**
  - `photo_path: appliences/refrigerator-checkup.webp`

### Single Door Fridge Check-Up

- **Category:** Refrigerator
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.82
- **Reviews:** 3.6K+
- **Options:** 1
- **Description:** Inspection and diagnosis for single-door refrigerators.
- **Photo / asset location:**
  - `photo_path: appliences/refrigerator-banner.webp`

### Side By Side Door Check-Up

- **Category:** Refrigerator
- **ID:** `Not specified`
- **Price:** 193
- **Rating:** 4.66
- **Reviews:** 401+
- **Options:** 2
- **Description:** Complete diagnosis for side-by-side refrigerators, with a 180-day service warranty.
- **Photo / asset location:**
  - `photo_path: appliences/refrigerator-checkup.webp`

### Water Purifier Check-Up

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 299
- **Rating:** 4.75
- **Reviews:** 4K+
- **Options:** 1
- **Description:** Inspection and diagnosis of your water purifier.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-service.webp`

### Water Purifier Filter Check-Up

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 299
- **Rating:** 4.76
- **Reviews:** 2.5K+
- **Options:** 1
- **Description:** Check filter condition and purifier performance.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-checkup.webp`

### Water Purifier Regular Service

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 1259
- **Rating:** 4.84
- **Reviews:** 416+
- **Options:** 1
- **Description:** Cleaning of the filter, sediment, and carbon filters.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-service.webp`

### Water Purifier Full Service

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 2499
- **Rating:** 4.70
- **Reviews:** 500+
- **Options:** 1
- **Description:** Complete purifier service with filter, membrane, and TDS testing.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-checkup.webp`

### Water Purifier Installation

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 419
- **Rating:** 4.80
- **Reviews:** 5.5K+
- **Options:** 1
- **Description:** Professional water purifier installation and setup.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-service.webp`

### Water Purifier Uninstallation

- **Category:** Water Purifier
- **ID:** `Not specified`
- **Price:** 359
- **Rating:** 4.87
- **Reviews:** 527+
- **Options:** 1
- **Description:** Safe disconnection and removal of your water purifier.
- **Photo / asset location:**
  - `photo_path: appliences/water-purifier-checkup.webp`

### Microwave Check-Up

- **Category:** Microwave
- **ID:** `Not specified`
- **Price:** 199
- **Rating:** 4.80
- **Reviews:** 2.4K+
- **Options:** 1
- **Description:** A technician checks your microwave and diagnoses the issue. Parts are charged separately.
- **Photo / asset location:**
  - `photo_path: appliences/microwave-banner.webp`

## Painting services

- Source: `painting_services_data.py`
- Catalogue page: `/painting-services`

### Interior Painting

- **Category:** Painting service catalogue
- **ID:** `Not specified`
- **Summary:** A fresh, lasting finish for bedrooms, living rooms and every space in between.
- **Image alt text:** NoBroker painting professional in a freshly painted living room
- **Key points:**
  - Transparent pricing with no hidden costs; jobs from ₹2,000
  - 2,200+ shades and 1,000+ texture ideas to choose from
  - Skilled painting partners with 300+ hours of training
- **Additional notes:**
  - Furniture and electrical outlet masking
  - Branded paints and a thorough handover
- **Photo / asset location:**
  - `photo: interior-painting.jpg`

### Exterior Painting

- **Category:** Painting service catalogue
- **ID:** `Not specified`
- **Summary:** Protect your exterior walls with paint and preparation suited to the weather.
- **Image alt text:** Freshly painted home exterior with a warm protective finish
- **Key points:**
  - Weather-proof and anti-algal protection
  - Jet washing and crack filling as part of surface preparation
  - Accurate quotation with a detailed cost breakdown
- **Additional notes:**
  - Options for exterior wall finishes
  - Careful masking around windows and fixtures
- **Photo / asset location:**
  - `photo: exterior-painting.png`

### Quick Move-in Painting

- **Category:** Painting service catalogue
- **ID:** `Not specified`
- **Summary:** Get your new or rental home ready, with cleanup included after painting.
- **Image alt text:** Painter preparing a bright home for move-in
- **Key points:**
  - Quick move-in painting with post-painting cleanup
  - A practical choice for rentals and quick refreshes
  - Budget-friendly options starting at ₹2,000
- **Additional notes:**
  - Room-by-room planning
  - Confirm the shade and scope before work begins
- **Photo / asset location:**
  - `photo: quick-move-in.jpg`

### 24-hour Painting

- **Category:** Painting service catalogue
- **ID:** `Not specified`
- **Summary:** A fast refresh for select rooms, touch-ups and rental move-in or move-out needs.
- **Image alt text:** Painter applying a clean white finish to an interior wall
- **Key points:**
  - Painting completed in as little as 24 hours for eligible jobs
  - Designed for rental move-ins, move-outs and touch-ups
  - Affordable packages starting around ₹4,500
- **Additional notes:**
  - Final schedule depends on room size and surface condition
  - Ask for an estimate before confirming
- **Photo / asset location:**
  - `photo: express-painting.jpg`

### Waterproofing

- **Category:** Painting service catalogue
- **ID:** `Not specified`
- **Summary:** Identify dampness and protect vulnerable areas with a considered waterproofing plan.
- **Image alt text:** Home service professional applying waterproofing treatment
- **Key points:**
  - Leakage detection and dampness solutions
  - Terrace, bathroom and external wall options
  - Jobs from ₹2,000 onwards, based on an inspection
- **Additional notes:**
  - The inspection helps identify the likely source
  - Recommended scope and estimate are shared before work
- **Photo / asset location:**
  - `photo: waterproofing.png`

### Family FAQs

#### How much do painting services cost?

Pricing depends on the area, surface condition, paint and selected finish. Many listed jobs start at ₹2,000. Request a free estimate to get a measured quote for your home.

#### Can I choose the paint colour and finish?

Yes. Explore shade and texture options with the painting consultant, then confirm the selected colours before work begins.

#### Does the estimate include paint and labour?

The estimate explains the recommended scope and its costs. Review the material and labour breakdown with the consultant before you confirm the project.

#### Can I book exterior painting or waterproofing?

Yes. Choose the service above and request an inspection. The expert can review the surface and suggest the suitable scope.

## Premium painting

- Source: `premium_painting_data.py`
- Catalogue page: `/premium-painting`

### Process steps

#### Book an Inspection
- **Tag:** TODAY
- **Description:** The measurements and notes are yours to keep either way.
- **Photo:** process-inspection.png

#### Design Consultation and Scoping
- **Tag:** 45 MIN (SET A TIME)
- **Description:** Surfaces, shades and finishes are discussed to define the scope.
- **Photo:** process-consultation.png

#### Get an Itemised Quote
- **Tag:** IN 24 HOURS
- **Description:** Get a full cost breakdown for paint, primer, putty and labour.
- **Photo:** process-quote.png

#### Preparation and Precautions
- **Tag:** DAY 1
- **Description:** Furniture is wrapped, floors are sheeted and surfaces prepared.
- **Photo:** process-preparation.png

#### Painting
- **Tag:** DAY 2 ONWARDS
- **Description:** Experienced painters apply the selected finish with care.
- **Photo:** process-painting.png

#### Final Handover
- **Tag:** QUALITY CHECK
- **Description:** Review the completed work with your project supervisor.
- **Photo:** process-handover.png

### Paint grades

#### Premium Emulsion
- **Brand:** Asian Paints
- **Description:** A smooth, durable finish for everyday living spaces.
- **Photo:** grade-basic.png

#### Royale Luxury Emulsion
- **Brand:** Asian Paints
- **Description:** A rich finish with a refined look and easy maintenance.
- **Photo:** grade-premium.png

#### Royale Glitz Shyne Matt
- **Brand:** Asian Paints
- **Description:** A soft sheen that brings depth to your walls.
- **Photo:** grade-luxury.png

#### Royale Aspira
- **Brand:** Asian Paints
- **Description:** A premium paint grade for a polished home makeover.
- **Photo:** grade-exterior.png

### Project gallery

#### Dining room transformation
- **Before:** project-1.jpg
- **After:** project-3.jpg
- **Location:** Pune
- **Note:** A rich, warm shade brings character to the dining space.

#### Bedroom transformation
- **Before:** project-4.jpg
- **After:** project-5.jpg
- **Location:** Pune
- **Note:** A soft rose finish gives this bedroom a fresh feel.

#### Living room transformation
- **Before:** project-6.jpg
- **After:** project-2.jpg
- **Location:** Pune
- **Note:** A deep green wall creates a calm focal point.

### FAQs

#### What does the ₹49 inspection get me?
- **Answer:** A painting expert visits to assess the surfaces, take measurements and note the preparation required. You can keep the measurements and itemised quote whether or not you proceed.

#### Is the ₹49 refunded if I book?
- **Answer:** The visit charge is adjusted against your painting booking when you proceed with the quoted work.

#### How is the painting quote calculated?
- **Answer:** The quote is based on measured area, surface condition, selected paint grade and the preparation work required. It lists paint, primer, putty and labour separately.

#### Can I choose the paint colour and brand?
- **Answer:** Yes. Discuss colour, brand and finish with the painting consultant during the site visit before confirming the scope.

#### How long does a home painting project take?
- **Answer:** The schedule depends on the home size and preparation needed. Your consultant will share the estimated timeline with the itemised quote.

#### Is the painting work insured?
- **Answer:** Eligible claims for completed painting bookings can be raised in the app and are reviewed under the applicable service conditions.

## Photo location guide

- Repository photo roots: `assets/` contains exported catalogue images; `static/` contains CSS/JS and legacy static images.
- Cleaning records: references commonly use `/assets/...` or `/static/img/...`; records without an item photo should use the family hero/banner.
- Electrician records: item photos are derived from the category photo stem and the `assets/electrican/photos/` directory used by the template.
- Carpenter records: photo stems such as `door`, `assembly`, `cabinet`, or `wardrobe` resolve under the carpenter asset directory.
- Plumber records: `photo_path` values point to `assets/plumber/figma/`.
- AC records: `photo_path` values point to `assets/ac/figma/`.
- Appliance records: `photo_path` values point to `assets/appliences/` (the directory name is intentionally spelled `appliences` in the current project).
- Painting records: item photos resolve under `assets/painting/normal/`.
- Premium painting: photos resolve from the `photo_base` and `icon_base` values returned by `premium_painting_data.py`.

## Data maintenance

When a service, price, description, or photo changes, update the corresponding `*_data.py` module first, then regenerate this Markdown so Copilot and the app use the same source of truth.

