---
title: 'What is the "backend" in backend web development?'
pubDate: 2025-05-15
description: 'Holistic view of backend development'
author: 'Alok'
image:
  url: 'https://docs.astro.build/assets/rose.webp'
  alt: 'The Astro logo on a dark background with a pink glow.'
tags: ['backend', 'JavaScript', 'learning in public', 'full-stack']
---

# What is the "backend" in backend web development?

<img src="/src/assets/images/backend.jpg" alt="backend web development" style="object-fit:cover; max-width: 42%; width: 100%; height: 250px;">

The **backend** refers to the part of a software application or website that handles the _logic_, database interactions, authentication, and server-side operations — essentially, everything that happens behind the scenes.

## What Does "Logic" Mean in This Context?

**Logic** refers to the instructions and rules that define how the application behaves. This is often called _business logic_ — the code that drives how data is processed and how the system responds.

### 💡 Examples of Backend Logic

#### 🛒 In an E-commerce App:

- Calculating the total price of items in a shopping cart.

- Applying discounts or promotions.

- Checking if an item is in stock.

- Charging the user’s credit card using a payment API.

- Sending a confirmation email after a purchase.

#### 👤 In a Social Media App:

- Making sure a user can’t follow themselves.

- Enforcing rate limits on how many posts a user can make per minute.

- Determining who sees which posts (e.g., privacy settings).

- Checking if a user is **authenticated** before posting.


#### 🧠 In Code Form (Simple Example)
```python
def calculate_total(cart_items):
    total = 0
    for item in cart_items:
        total += item['price'] * item['quantity']
    return total
```

This function is **backend logic** — it takes a list of items in a cart and calculates the total cost. The frontend would call this on the server to get a total, but the calculation happens _behind the scenes_.