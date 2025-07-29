# Queen's Medical Centre (QMC) - Fullstack CMS Website

A modern, scalable, and responsive fullstack web platform for Queen's Medical Centre, an independent healthcare training institution in Wuse, Abuja, partnered with the University of Nottingham (UK).

##  About the Project

This platform serves dual purposes:
- **Public Website**: Showcases QMC's programs, research, and services to prospective students and the public
- **Admin CMS**: Provides a secure, intuitive dashboard for administrators to manage all website content

##  Features

### Public Website
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Server-side rendering with Next.js App Router
- **Dynamic Content**: All content managed through the admin dashboard
- **Performance Optimized**: Lazy loading and modern web practices

### Admin Dashboard
- **Secure Authentication**: NextAuth.js with credential-based login
- **Content Management**: Full CRUD operations for all website sections
- **Blog Management**: Rich text editor with image upload capabilities
- **Job Board**: Complete job listing management system
- **Event Management**: Create and manage institutional events
- **Media Upload**: Cloudinary integration for image management
- **Real-time Updates**: Changes reflect immediately on the public site

##  Technology Stack

- **Frontend**: Next.js 13+ (App Router), TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js
- **File Storage**: Cloudinary
- **Rich Text**: React Quill
- **UI Components**: Radix UI with shadcn/ui
- **Deployment**: Vercel (Frontend) + MongoDB Atlas (Database)

##  Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account for image uploads
- Git for version control

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd qmc-cms-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Database Setup
The application will automatically create the necessary collections when you first run it. However, you'll need to create an admin user manually.

### 5. Create Admin User
Connect to your MongoDB database and create an admin user:

```javascript
// In MongoDB shell or MongoDB Compass
db.users.insertOne({
  email: "admin@qmc.edu.ng",
  password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSforHgO", // hashed "admin123"
  name: "QMC Administrator",
  role: "admin",
  createdAt: new Date()
})
```

### 6. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the public website and `http://localhost:3000/admin` for the admin dashboard.

##  Admin Access

**Login URL**: `http://localhost:3000/admin/login`

**Demo Credentials**:
- **Email**: `admin@qmc.edu.ng`
- **Password**: `admin123`

##  Project Structure

```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   └── (public pages)/    # Public website pages
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── home/             # Homepage sections
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── models/               # MongoDB schemas
└── public/               # Static assets
```

##  Content Management

### Editable Sections
The admin dashboard provides full CRUD functionality for:

- **About Us**: History, academic structure, global impact
- **Study With Us**: Undergraduate, postgraduate, international programs
- **Research**: Research impact, partnerships, SDGs
- **Alumni**: Events, professional development, resources
- **Contact**: Department contacts, study enquiries
- **Facilities**: Library services, conference centers
- **Blog**: News articles and blog posts
- **Jobs**: Job listings and applications
- **Events**: Institutional events and announcements

### Blog Management
- Rich text editor with formatting options
- Image upload and media management
- Draft and publish states
- Categories and tags
- SEO-friendly URLs

### Job Board
- Create and manage job postings
- Set application deadlines
- External application links
- Status management (open/closed/draft)

## 🚀 Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### MongoDB Atlas Setup
1. Create a MongoDB Atlas cluster
2. Configure network access and database users
3. Update `MONGODB_URI` in environment variables

### Cloudinary Setup
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update Cloudinary credentials in environment variables

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Content Types
1. Create a new Mongoose model in `models/`
2. Add API routes in `app/api/`
3. Create admin management pages
4. Update the admin sidebar navigation

##  API Documentation

### Authentication
- `POST /api/auth/signin` - Admin login
- `POST /api/auth/signout` - Admin logout

### Content Management
- `GET /api/content` - Fetch content by section
- `POST /api/content` - Create new content
- `PUT /api/content/[id]` - Update content
- `DELETE /api/content/[id]` - Delete content

### Blog Management
- `GET /api/blog` - Fetch blog posts
- `POST /api/blog` - Create new blog post
- `PUT /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post

### File Upload
- `POST /api/upload` - Upload images to Cloudinary

##  Security Features

- **Authentication**: Secure admin login with NextAuth.js
- **Authorization**: Protected admin routes and API endpoints
- **Password Hashing**: bcrypt for secure password storage
- **File Validation**: Image type and size validation
- **CSRF Protection**: Built-in Next.js CSRF protection

##  Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component-specific styles in individual files

### Content Schema
- Modify models in `models/` directory
- Update API routes accordingly
- Adjust admin forms for new fields

##  Troubleshooting

### Common Issues

**Database Connection Error**
- Verify MongoDB URI is correct
- Check network connectivity
- Ensure database user has proper permissions

**Image Upload Failing**
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper file types

**Admin Login Issues**
- Verify admin user exists in database
- Check password hash is correct
- Ensure NextAuth configuration is proper

##  Support

For technical support or questions about this project:

- **Institution**: Queen's Medical Centre, Wuse, Abuja
- **Partnership**: University of Nottingham (UK)
- **Technical Issues**: Contact your development team

##  License

This project is proprietary software developed for Queen's Medical Centre. All rights reserved.

##  Contributing

This is a private institutional project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review
5. Deploy after approval

##  Future Enhancements

Planned features for future releases:
- Student application portal
- Online course management
- Alumni directory
- Event registration system
- Newsletter management
- Advanced analytics dashboard
- Multi-language support
- Mobile app integration

---

**Built by Yusasive Queen's Medical Centre**
*Advancing healthcare education in partnership with the University of Nottingham (UK)*