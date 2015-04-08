// Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "Getting Started",
          content: "Welcome to your PennyMac Loan Application! Let's take a quick tour.",
          target: "#tour-1",
          placement: "right",
        },
        {
          title: "Your Loan Details",
          content: "Click this link to show your preliminary loan terms and details.",
          target: "#tour-2",
          placement: "right"
        },
                {
          title: "Your Estimated Closing Date",
          content: "Assuming everything stays on track, this is the expected date your loan will close.",
          target: "#tour-3",
          placement: "left"
        },
        {
          title: "Your To Do List",
          content: "When we need information or documents from you to keep your closing date on track, it will show up here with a due date.",
          target: "#tour-4",
          placement: "bottom"
        },
        {
          title: "To Do Items",
          content: "Individual tasks will appear as items in your list. To complete them, just click the task name and follow the instructions.",
          target: "#tour-5",
          placement: "right"
        },
        {
          title: "You Are Here",
          content: "You can always see exactly where you are in the process here.",
          target: "#tour-6",
          placement: "left"
        },
        {
          title: "Getting Help",
          content: "We're just a click away when you need it! Send us a message, give us a call or live chat with our dedicated support team.",
          target: "#tour-7",
          placement: "bottom",
          arrowOffset: 200,
          xOffset: -180
        },
        {
          title: "All Your Application Activity",
          content: "Find any document or message here. Search by keyword, date and quickly filter by type.",
          target: "#search-box",
          placement: "top"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);