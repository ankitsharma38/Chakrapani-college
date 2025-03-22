import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { courses } from "../Course/courseData";
import { eligibilityCriteria, documents } from "../Criteria/eligibilityData";

const ChatBotComponent = () => {
  // Helper function to display course details
  const CourseDetails = ({ steps }) => {
    const courseName = steps.course_input.value.toLowerCase();
    const course = courses.find((c) => c.name.toLowerCase().includes(courseName));

    return (
      <div style={{ textAlign: "left" }}>
        {course ? (
          <>
            <strong>{course.name}</strong>
            <p>Duration: {course.duration}</p>
            <p>Fees: {course.fees}</p>
            <p>{course.description}</p>
          </>
        ) : (
          <p>Sorry, I couldn’t find that course. Please try again!</p>
        )}
      </div>
    );
  };

  // Fine-tuned function to format the course list attractively
  const formatCourseList = () => {
    return (
      "Here’s a list of our amazing courses:\n\n" +
      courses
        .map(
          (course, index) =>
            `🌟 ${index + 1}. ${course.name}\n   - Duration: ${course.duration}\n   - Fees: ${course.fees}`
        )
        .join("\n\n") +
      "\n\nWhich one interests you? Type its name for more details!"
    );
  };

  // Chatbot steps
  const steps = [
    {
      id: "1",
      message: "Hello! Welcome to Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya. How can I assist you today?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "courses", label: "Learn About Courses", trigger: "course_intro" },
        { value: "admission", label: "Admission Process", trigger: "admission_intro" },
        { value: "contact", label: "Contact Information", trigger: "contact_info" },
        { value: "other", label: "Other Queries", trigger: "other" },
      ],
    },
    {
      id: "course_intro",
      message: "We offer various courses in Yoga, Naturopathy, and Panchakarma. Would you like a list or details about a specific course?",
      trigger: "course_options",
    },
    {
      id: "course_options",
      options: [
        { value: "list", label: "Show all courses", trigger: "course_list" },
        { value: "search", label: "Search for a course", trigger: "course_input_prompt" },
        { value: "back", label: "Go back", trigger: "options" },
      ],
    },
    {
      id: "course_list",
      message: formatCourseList, // Use the fine-tuned function here
      trigger: "course_list_end",
    },
    {
      id: "course_list_end",
      message: "Would you like details about a specific course?",
      trigger: "course_options",
    },
    {
      id: "course_input_prompt",
      message: "Enter the course name (e.g., 'Diploma in Panchakarma').",
      trigger: "course_input",
    },
    {
      id: "course_input",
      user: true,
      trigger: "course_details",
    },
    {
      id: "course_details",
      component: <CourseDetails />,
      trigger: "ask_more_courses",
    },
    {
      id: "ask_more_courses",
      message: "Would you like to search another course or go back?",
      trigger: "course_options",
    },
    {
      id: "admission_intro",
      message: "What would you like to know about admission?",
      trigger: "admission_options",
    },
    {
      id: "admission_options",
      options: [
        { value: "eligibility", label: "Eligibility Criteria", trigger: "eligibility_info" },
        { value: "documents", label: "Required Documents", trigger: "documents_info" },
        { value: "back", label: "Go back", trigger: "options" },
      ],
    },
    {
      id: "eligibility_info",
      message: `Eligibility: ${eligibilityCriteria.map((e) => e.text).join("; ")}`,
      trigger: "admission_end",
    },
    {
      id: "documents_info",
      message: `Required Documents: ${documents.join(", ")}`,
      trigger: "admission_end",
    },
    {
      id: "admission_end",
      message: "Would you like to ask about anything else?",
      trigger: "options",
    },
    {
      id: "contact_info",
      message: "Contact us at:\n📞 9890101609 / 7796187169\n📧 chakrapani615@gmail.com\n🏫 28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027",
      trigger: "contact_end",
    },
    {
      id: "contact_end",
      message: "Need more help?",
      trigger: "options",
    },
    {
      id: "other",
      message: "Please type your question, and I’ll do my best to assist you!",
      trigger: "other_input",
    },
    {
      id: "other_input",
      user: true,
      trigger: "other_response",
    },
    {
      id: "other_response",
      message: "Thanks for your query! Contact us at chakrapani615@gmail.com for more details.",
      trigger: "options",
    },
  ];

  // Custom theme for the chatbot
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Arial, sans-serif",
    headerBgColor: "#10B981", // Green header
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#10B981", // Green bot bubbles
    botFontColor: "#fff",
    userBubbleColor: "#fff", // White user bubbles
    userFontColor: "#4a4a4a",
    borderRadius: "10px",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true} // Make the chatbot float
        headerTitle="College Assistant"
        botAvatar="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" // Bot avatar
        userAvatar="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // User avatar
        width="400px"
        height="500px"
        placeholder="Type your message..."
        recognitionEnable={true} // Enable voice input
        recognitionLang="en-US" // Set language for voice input
        style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }} // Custom styling
      />
    </ThemeProvider>
  );
};

export default ChatBotComponent;