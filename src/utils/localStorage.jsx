// src/utils/localStorage.jsx

// --- SAMPLE DATA (Employees + Admin) ----
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare project report",
        description: "Create summary report for Q1 performance.",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false 
      },
      {
        title: "Team meeting",
        description: "Weekly sync with team members.",
        date: "2025-01-11",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix UI bugs",
        description: "Resolve issues in dashboard UI.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client follow-up",
        description: "Email client regarding project updates.",
        date: "2025-01-09",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Document API changes",
        description: "Update backend API documentation.",
        date: "2025-01-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix authentication issue",
        description: "Debug login issue affecting some users.",
        date: "2025-01-13",
        category: "Bug Fixing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Daily standup",
        description: "Attend morning standup meeting.",
        date: "2025-01-14",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

// --- STORE DATA INTO LOCAL STORAGE ----
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// --- READ DATA FROM LOCAL STORAGE ----
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
