// Define the shape of a single User object
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  phone?: string; // Optional property
}

// Define the shape of the entire API response (an array of User objects)
type UsersApiResponse = User[];

// --- Simulate an API call ---
async function fetchUsers(): Promise<UsersApiResponse> {
  // In a real application, you'd use fetch or axios here
  // const response = await fetch('/api/users');
  // const data: UsersApiResponse = await response.json();
  // return data;

  // Mock data for demonstration:
  const mockData: UsersApiResponse = [
    {
      id: 101,
      firstName: "Arjun",
      lastName: "Kumar",
      email: "arjun@example.com",
      isActive: true,
      phone: "9876543210"
    },
    {
      id: 102,
      firstName: "Priya",
      lastName: "Sharma",
      email: "priya@example.com",
      isActive: false
    },
    {
      id: 103,
      firstName: "Rahul",
      lastName: "Gupta",
      email: "rahul@example.com",
      isActive: true
    }
  ];

  return new Promise(resolve => setTimeout(() => resolve(mockData), 500));
}

// --- Usage ---
async function processUserData() {
  try {
    const users: UsersApiResponse = await fetchUsers(); // TypeScript knows 'users' is an array of User objects

    console.log("Fetched users:");
    users.forEach(user => {
      // TypeScript allows us to access properties with confidence
      console.log(`- ${user.firstName} ${user.lastName} (${user.email}) - Active: ${user.isActive}`);
      if (user.phone) { // Safe check for optional property
        console.log(`  Phone: ${user.phone}`);
      }
    });

    // Example of type safety in action:
    // users[0].nonExistentProperty = "hello"; // Error: Property 'nonExistentProperty' does not exist on type 'User'.

  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

processUserData();

export {}; // To make this file a module and avoid global scope conflicts