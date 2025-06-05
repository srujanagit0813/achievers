import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Materials=[
    {
      "id": 1,
      "title": "Introduction to Materials Science",
      "category": "Material",
      "duration": "1 hr 30 min",
      "price": 49,
      "oldPrice": 89,
      "instructor": "Dr. Jane Smith",
      "image": "https://i.pinimg.com/originals/2c/0c/07/2c0c07672922e89c7c7f8476ec700628.jpg",
      "rating": 4.8,
      "lessons": 20,
      "description": "Learn the basics of React.js, components, hooks, and state.",
     "content": [
    {
      "heading": "What is React?",
      "paragraph": "React is a JavaScript library for building user interfaces..."
    },
    {
      "heading": "JSX in React",
      "paragraph": "JSX is a syntax extension for JavaScript used with React..."
    },
    {
      "heading": "React Components",
      "paragraph": "Components are the building blocks of React applications..."
    }
  ]
    },
    {
        "id": 2,
        "title": "Materials Engineering for Beginners",
        "category": "Material",
        "duration": "2 hr 15 min",
        "price": 59,
        "oldPrice": 99,
        "instructor": "Prof. Alan Walker",
        "image": "https://tse3.mm.bing.net/th?id=OIP.EyLYKuHv0PKzWD__xO_gewHaEL&pid=Api&P=0&h=180",
        "rating": 4.6,
        "lessons": 25,
        "description": "Learn the basics of React.js, components, hooks, and state.",
        "content": [
       {
         "heading": "What is React?",
         "paragraph": "React is a JavaScript library for building user interfaces..."
       },
       {
         "heading": "JSX in React",
         "paragraph": "JSX is a syntax extension for JavaScript used with React..."
       },
       {
         "heading": "React Components",
         "paragraph": "Components are the building blocks of React applications..."
       }
     ]
      },
      {
        "id": 3,
        "title": "Composite Materials and Applications",
        "category": "Material",
        "duration": "1 hr 45 min",
        "price": 39,
        "oldPrice": 79,
        "instructor": "Dr. Neha Patel",
        "image": "https://tse1.mm.bing.net/th?id=OIP.1vvfllioIazp3WRbIrVrzAHaFj&pid=Api&P=0&h=180",
        "rating": 4.7,
        "lessons": 22,
        "description": "Learn the basics of React.js, components, hooks, and state.",
        "content": [
       {
         "heading": "What is React?",
         "paragraph": "React is a JavaScript library for building user interfaces..."
       },
       {
         "heading": "JSX in React",
         "paragraph": "JSX is a syntax extension for JavaScript used with React..."
       },
       {
         "heading": "React Components",
         "paragraph": "Components are the building blocks of React applications..."
       }
     ]
      },
      {
        "id": 4,
        "title": "Nanomaterials and Nanotechnology",
        "category": "Material",
        "duration": "2 hr 5 min",
        "price": 69,
        "oldPrice": 110,
        "instructor": "Dr. Samuel Lee",
        "image": "https://tse4.mm.bing.net/th?id=OIP.oF7HYVBtewpzomaxamLXnwAAAA&pid=Api&P=0&h=180",
        "rating": 4.9,
        "lessons": 30,
        "description": "Learn the basics of React.js, components, hooks, and state.",
        "content": [
       {
         "heading": "What is React?",
         "paragraph": "React is a JavaScript library for building user interfaces..."
       },
       {
         "heading": "JSX in React",
         "paragraph": "JSX is a syntax extension for JavaScript used with React..."
       },
       {
         "heading": "React Components",
         "paragraph": "Components are the building blocks of React applications..."
       }
     ]
      },
      {
        "id": 5,
        "title": "Smart Materials for Future Technologies",
        "category": "Material",
        "duration": "1 hr 20 min",
        "price": 45,
        "oldPrice": 85,
        "instructor": "Dr. Maria Gonzalez",
        "image": "https://tse4.mm.bing.net/th?id=OIP.X_ftLCD9NgewHcydUWNNAQHaFn&pid=Api&P=0&h=180",
        "rating": 4.5,
        "lessons": 18,
        "description": "Learn the basics of React.js, components, hooks, and state.",
        "content": [
       {
         "heading": "What is React?",
         "paragraph": "React is a JavaScript library for building user interfaces..."
       },
       {
         "heading": "JSX in React",
         "paragraph": "JSX is a syntax extension for JavaScript used with React..."
       },
       {
         "heading": "React Components",
         "paragraph": "Components are the building blocks of React applications..."
       }
     ]
      },
      {
        "id": 6,
        "title": "Introduction to Materials Science",
        "category": "Material",
        "duration": "1 hr 30 min",
        "price": 49,
        "oldPrice": 89,
        "instructor": "Dr. Jane Smith",
        "image": "https://tse4.mm.bing.net/th?id=OIP.HJbSQKZJcqC-NPFS90XlCgAAAA&pid=Api&P=0&h=180",
        "rating": 4.8,
        "lessons": 20,
        "description": "Learn the basics of React.js, components, hooks, and state.",
        "content": [
       {
         "heading": "What is React?",
         "paragraph": "React is a JavaScript library for building user interfaces..."
       },
       {
         "heading": "JSX in React",
         "paragraph": "JSX is a syntax extension for JavaScript used with React..."
       },
       {
         "heading": "React Components",
         "paragraph": "Components are the building blocks of React applications..."
       }
     ]
      },
      {
          "id": 7,
          "title": "Materials Engineering for Beginners",
          "category": "Material",
          "duration": "2 hr 15 min",
          "price": 59,
          "oldPrice": 99,
          "instructor": "Prof. Alan Walker",
          "image": "https://tse4.mm.bing.net/th?id=OIP.irpKmEJIU98plmw777r_0gHaEK&pid=Api&P=0&h=180",
          "rating": 4.6,
          "lessons": 25,
          "description": "Learn the basics of React.js, components, hooks, and state.",
          "content": [
         {
           "heading": "What is React?",
           "paragraph": "React is a JavaScript library for building user interfaces..."
         },
         {
           "heading": "JSX in React",
           "paragraph": "JSX is a syntax extension for JavaScript used with React..."
         },
         {
           "heading": "React Components",
           "paragraph": "Components are the building blocks of React applications..."
         }
       ]
        },
        {
          "id": 8,
          "title": "Composite Materials and Applications",
          "category": "Material",
          "duration": "1 hr 45 min",
          "price": 39,
          "oldPrice": 79,
          "instructor": "Dr. Neha Patel",
          "image": "https://tse4.mm.bing.net/th?id=OIP.i1fpXLkrGhnGuA8SoIR-3wHaJe&pid=Api&P=0&h=180",
          "rating": 4.7,
          "lessons": 22,
          "description": "Learn the basics of React.js, components, hooks, and state.",
          "content": [
         {
           "heading": "What is React?",
           "paragraph": "React is a JavaScript library for building user interfaces..."
         },
         {
           "heading": "JSX in React",
           "paragraph": "JSX is a syntax extension for JavaScript used with React..."
         },
         {
           "heading": "React Components",
           "paragraph": "Components are the building blocks of React applications..."
         }
       ]
        },
        {
          "id": 9,
          "title": "Nanomaterials and Nanotechnology",
          "category": "Material",
          "duration": "2 hr 5 min",
          "price": 69,
          "oldPrice": 110,
          "instructor": "Dr. Samuel Lee",
          "image": "https://tse4.mm.bing.net/th?id=OIP.f11DXSoOTvyF8oCvglo2LgHaDe&pid=Api&P=0&h=180",
          "rating": 4.9,
          "lessons": 30,
          "description": "Learn the basics of React.js, components, hooks, and state.",
          "content": [
         {
           "heading": "What is React?",
           "paragraph": "React is a JavaScript library for building user interfaces..."
         },
         {
           "heading": "JSX in React",
           "paragraph": "JSX is a syntax extension for JavaScript used with React..."
         },
         {
           "heading": "React Components",
           "paragraph": "Components are the building blocks of React applications..."
         }
       ]
        },
        {
          "id": 10,
          "title": "Smart Materials for Future Technologies",
          "category": "Material",
          "duration": "1 hr 20 min",
          "price": 45,
          "oldPrice": 85,
          "instructor": "Dr. Maria Gonzalez",
          "image": "https://tse2.mm.bing.net/th?id=OIP.hTxkggPnTTLBG8Y5tWXWMAHaD4&pid=Api&P=0&h=180",
          "rating": 4.5,
          "lessons": 18,
          "description": "Learn the basics of React.js, components, hooks, and state.",
          "content": [
         {
           "heading": "What is React?",
           "paragraph": "React is a JavaScript library for building user interfaces..."
         },
         {
           "heading": "JSX in React",
           "paragraph": "JSX is a syntax extension for JavaScript used with React..."
         },
         {
           "heading": "React Components",
           "paragraph": "Components are the building blocks of React applications..."
         }
       ]
        },
        
            {
              id: 11,
              category: "Mathematics",
              title: "Algebra Foundations for Beginners",
              instructor: "Dr. Ramesh Kumar",
              duration: "2 hrs 10 min",
              price: 15,
              oldPrice: 25,
              rating: 4.6,
              image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
              description: "This course helps students understand algebraic principles, equations, and problem-solving techniques for academic success.",
              content: [
                {
                  heading: "Introduction to Algebra",
                  paragraph: "Understand variables, constants, and how algebra is used in everyday calculations and higher-level math."
                },
                {
                  heading: "Solving Linear Equations",
                  paragraph: "Learn step-by-step how to isolate variables, balance equations, and solve real-world problems."
                }
              ]
            },
            {
              id: 12,
              category: "Physics",
              title: "Basics of Motion and Laws",
              instructor: "Prof. Anjali Mehra",
              duration: "1 hr 45 min",
              price: 20,
              oldPrice: 30,
              rating: 4.8,
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
              description: "A beginner-friendly course on Newton's laws, types of motion, and velocity vs acceleration explained with experiments.",
              content: [
                {
                  heading: "Types of Motion",
                  paragraph: "Explore linear, circular, and periodic motion with real-world examples and simple animations."
                },
                {
                  heading: "Newton's Laws of Motion",
                  paragraph: "Understand inertia, force, action-reaction with relatable classroom and outdoor experiments."
                }
              ]
            },
            {
              id: 13,
              category: "Chemistry",
              title: "Understanding Chemical Reactions",
              instructor: "Mrs. Kavita Desai",
              duration: "1 hr 20 min",
              price: 18,
              oldPrice: 22,
              rating: 4.4,
              image: "https://tse4.mm.bing.net/th?id=OIP.NMhM8tjCuCx7y3NKMQJT_AHaHa&pid=Api&P=0&h=180",
              description: "An introductory course on chemical bonding, reactions, and equations with lab-based visual content.",
              content: [
                {
                  heading: "Types of Reactions",
                  paragraph: "Learn synthesis, decomposition, and displacement reactions with easy-to-understand chemical equations."
                },
                {
                  heading: "Balancing Equations",
                  paragraph: "Master the art of balancing chemical equations with step-by-step rules and examples."
                }
              ]
            },
            {
              id: 14,
              category: "Biology",
              title: "Cell Structure and Functions",
              instructor: "Dr. Swetha Rao",
              duration: "2 hrs",
              price: 22,
              oldPrice: 35,
              rating: 4.7,
              image: "https://tse4.mm.bing.net/th?id=OIP.t2b7R9TSABKsdqXcViN_iAHaEK&pid=Api&P=0&h=180",
              description: "Explore the fundamental unit of life – the cell. Understand cell organelles and their roles through illustrations.",
              content: [
                {
                  heading: "Cell Components",
                  paragraph: "Detailed walkthrough of nucleus, mitochondria, endoplasmic reticulum, and their functions in living organisms."
                },
                {
                  heading: "Differences between Plant and Animal Cells",
                  paragraph: "Learn with diagrams and interactive visuals the major structural differences between plant and animal cells."
                }
              ]
            },
            {
              id: 15,
              category: "Geography",
              title: "Climate and Weather Patterns",
              instructor: "Mr. Arvind Sharma",
              duration: "1 hr 30 min",
              price: 12,
              oldPrice: 20,
              rating: 4.2,
              image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
              description: "Understand the Earth's atmosphere, weather elements, and how climate changes are affecting our environment.",
              content: [
                {
                  heading: "Atmospheric Layers",
                  paragraph: "An overview of troposphere to exosphere with animations and global examples."
                },
                {
                  heading: "Factors Influencing Climate",
                  paragraph: "Explore latitude, altitude, ocean currents, and other major climate influencers."
                }
              ]
            }
          ];
          
  
  
const MaterialCoursesSection = () => {
    const navigate = useNavigate();

  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight="bold" >
        📘 Material Courses
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Explore top-rated courses related to Materials Science, Engineering, and more.
      </Typography>

      <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
    px: 2,
  }}
>
  {Materials.map((course) => (
    <Card
      key={course.id}
      sx={{
        width: "19%", 
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        mt:2
      }}
      onClick={() => navigate(`/materials/${course.id}`)}
    >
      <CardMedia
        component="img"
        height="150"
        image={course.image}
        alt={course.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
      
        <Typography variant="h6" gutterBottom noWrap>
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          By {course.instructor} • {course.duration}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            value={course.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {course.rating}
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          ${course.price}
          <Typography
            component="span"
            sx={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: "0.9rem",
              ml: 1,
            }}
          >
            ${course.oldPrice}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button size="small" variant="contained" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  ))}
</Box>

    </Box>
  );
};

export default MaterialCoursesSection;
