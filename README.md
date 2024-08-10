
# Blogram - Personal Blog Page

Blogram is a personal blog page developed using React.js and styled with Material Tailwind and Tailwind CSS. The application features a visually appealing and fully responsive design with both dark and light modes. It allows users to read and comment on blog posts while providing a secure dashboard for admins to create and delete posts.

## Features

- **Responsive Design**: The blog page is fully responsive, ensuring an optimal viewing experience on various devices.
- **Dark/Light Mode**: Users can toggle between dark and light themes for a personalized reading experience.
- **User Interaction**: Users can read blog posts and leave comments.
- **Admin Dashboard**: Admins can securely log in to create or delete blog posts.
- **Firebase Integration**: Efficient data storage and user authentication using Firebase.

## Technologies Used

- **Frontend**: React.js, Material Tailwind, Tailwind CSS
- **Backend**: Firebase (for data storage and authentication)

## Snapshots
![Screenshot (66)](https://github.com/user-attachments/assets/a7af9503-9cdd-4a63-b70b-8463c54c3fc6)

![Screenshot (67)](https://github.com/user-attachments/assets/87048409-6eb1-405f-aa1c-665db9461054)

![image](https://github.com/user-attachments/assets/8d25d473-9a55-4acb-a698-5f9a538faf5f)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/himanshuKr7/blogram.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd blogram
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   This will start the Vite development server. Open your browser and go to `http://localhost:5173` to see the application in action.

## Configuration

Make sure to set up your Firebase project and replace the Firebase configuration details in the `.env` file with your own. The `.env` file should be created in the root directory of the project with the following content:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Contributing

Feel free to submit issues or pull requests if you have any improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Made With 	&hearts; by Himanshu :)
