export const realEstateData = [
    {
      id: 1,
      type: "House",
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipcode: "94103",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2000,
      price: 1500000,
      images: [
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/800x600",
        "https://via.placeholder.com/1200x900",
      ],
      propertyType: "Single Family Residential",
      builder: {
        name: "ABC Builders",
        website: "https://www.abcbuilder.com",
        contact: {
          email: "info@abcbuilder.com",
          phone: "555-555-5555",
        },
      },
      amenities: ["Swimming pool", "Gym", "Garage"],
      agentId: 123,
    },
    {
      id: 2,
      type: "Condo",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90012",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      price: 800000,
      images: [
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/800x600",
        "https://via.placeholder.com/1200x900",
      ],
      propertyType: "Multi-Family Residential",
      builder: {
        name: "XYZ Developers",
        website: "https://www.xyzdevelopers.com",
        contact: {
          email: "info@xyzdevelopers.com",
          phone: "555-555-5555",
        },
      },
      amenities: ["Security", "Roof deck", "BBQ area"],
      agentId: 456,
    },
    {
      id: 3,
      type: "Apartment",
      address: "789 Oak St",
      city: "New York",
      state: "NY",
      zipcode: "10003",
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 800,
      price: 500000,
      images: [
        "https://via.placeholder.com/400x300",
        "https://via.placeholder.com/800x600",
        "https://via.placeholder.com/1200x900",
      ],
      propertyType: "Rental",
      builder: {
        name: "PQR Properties",
        website: "https://www.pqrproperties.com",
        contact: {
          email: "info@pqrproperties.com",
          phone: "555-555-5555",
        },
      },
      amenities: ["Laundry", "Pet-friendly", "Bike storage"],
      agentId: 789,
    },
  ];
  
  export const agentData = [
    {
      id: 123,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "555-555-5555",
    },
    {
      id: 456,
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      phone: "555-555-5555",
    },
    {
      id: 789,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bobjohnson@example.com",
      phone: "555-555-5555",
    },
  ];