// src/utils/localStorage.jsx

// --- SAMPLE DATA (Employees + Admin) ----
const employees = [
  {
    id: 1,
    firstName: "Shipul",
    email: "employee1@example.com",
    password: "123",
    taskCounts:{
      active:2,
      newTask:1,
      completed:1,
      failed:0
    },

    tasks: [
      {
        active:true,
        newTask:true,
        completed:false,
        failed:false,
        taskTitle: "Update info",
        taskDescription:"Update the homepage design",
        taskDate:2025-21-11,
        category:Design 
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:fasle,
        taskTitle: "Client meeting",
        taskDescription:"Discuss Project requirements",
        taskDate:2025-11-30,
        category:Meeting
      },
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskTitle: "Fix bugs",
        taskDescription:"Resolve bugs reported in issue tracker",
        taskDate:2025-11-21,
        category:Development 
      }
    ]
  },

  {
    id: 2,
    firstName: "Joya",
    email: "employee2@example.com",
    password: "123",

    taskCounts:{
      active:1,
      newTask:0,
      completed:1,
      failed:0
    },

    tasks: [
      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskTitle: "Database optimization",
        taskDescription:"Optimize queries for better performance",
        taskDate:2025-11-26,
        category:Database  
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:fasle,
        taskTitle: "Design New Feature",
        taskDescription:"Create mockups for the new feature",
        taskDate:2025-11-28,
        category:Design 
      },
    ]
  },

  {
    id: 3,
    firstName: "Indrani",
    email: "employee3@example.com",
    password: "123",

    taskCounts:{
      active:2,
      newTask:1,
      completed:1,
      failed:0
    },

    tasks: [
      {
        active:true,
        newTask:true,
        completed:false,
        failed:false,
        taskTitle: "Prepare Presentation",
        taskDescription:"Prepare slides for upcoming client presentation",
        taskDate:2025-11-23,
        category:Presentation  
      },

      {
        active:true,
        newTask:false,
        completed:false,
        failed:false,
        taskTitle: "Code review",
        taskDescription:"Review the codebase for optimization",
        taskDate:2025-11-23,
        category:Development 
      },

      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskTitle: "Testing",
        taskDescription:"Test the latest build for bugs",
        taskDate:2025-11-22,
        category:QA 
      }
    ]
  },

  {
    id: 4,
    firstName: "Susreeb",
    email: "employee4@example.com",
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
    id: 5,
    firstName: "Ashesh",
    email: "employee5@example.com",
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
