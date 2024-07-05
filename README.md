Website choice
Business Name: Investing in Potential

Social Media Engagement Platform: Investing in Potential already has an active presence on Instagram: Investing in Potential 
Ig link: https://www.instagram.com/investing.in.potential?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
 
Motivation:
Investing in Potential is driven by the vision of enabling individuals to unlock their latent potential and become high-value contributors to society. The motivation behind developing a website lies in creating a comprehensive online platform that not only showcases the organization's offerings but also serves as a beacon of inspiration and guidance for those seeking personal and professional growth. The website will serve as a hub for information, resources, and enrollment in self-introspection and self-development courses.
 
Objectives (Gupta, 2023):
1. Educational Hub: The website will serve as an educational hub, offering valuable resources, articles, and insights into personal development, self-introspection, and leadership principles. A content calendar will be curated with topics related to personal development, self-introspection, and leadership principles.

2.Expand Reach: The website aims to reach a broader audience beyond social media platforms, attracting individuals interested in personal growth and self-improvement from diverse backgrounds and demographics.
3.Course Enrollment: Facilitating easy course enrollment and registration processes is a primary objective. The website will feature clear and intuitive pathways for visitors to explore course offerings, understand curriculum details, and sign up for programs.

4. Community Building: Investing in Potential recognizes the importance of community support in personal growth journeys. The website will incorporate forums, discussion boards, and interactive elements to foster a vibrant and interactive online community where members can share experiences, exchange ideas, and support each other.

5. Brand Awareness: Establishing a strong online presence is crucial for brand awareness and credibility. The website will showcase testimonials, success stories, and case studies to highlight the transformative impact of Investing in Potential's programs and initiatives.

6. Resource Repository: Investing in Potential aims to create a repository of valuable resources, including e-books, guides, podcasts, and video content, to empower individuals with practical tools and strategies for personal and professional development. Book suggestions will be made of self-improvement books that will be valuable to anyone whether you take the course or not. YouTube videos will be linked from people with great insight on self-help.

 7.Establish Credibility: A professionally designed website with compelling content, testimonials, and success stories will enhance Investing in Potential's credibility as a reputable provider of personal development resources, inspiring trust and confidence among visitors.











Website assets
Domain Name and Web Hosting: Investing in Potential will secure a domain name and select reliable web hosting services to ensure website availability, performance, and scalability. This includes setting up necessary security protocols and backup systems to safeguard data.
Website Redesign: Investing in Potential will require a website redesign to enhance user experience, optimize navigation, and improve visual aesthetics. This will involve collaborating with web designers, UX/UI experts, and developers to create a modern and responsive website. (Sotolotto, 2013)
 Content Creation: Generating compelling and informative content is essential for engaging visitors and establishing authority in personal development. Investing in Potential will invest in content creation resources, including writers, editors, graphic designers, and multimedia producers, to produce high-quality articles, videos, and infographics. Current assets include promotional videos and testimonials from previous course participants.
Visual Assets: High-quality images, illustrations, and multimedia elements will be sourced or created to enhance the website's visual appeal and storytelling capabilities. This will involve using stock photo libraries, commissioning custom artwork, or conducting photoshoots to capture authentic and inspiring visuals. Specific assets include:
•	Photos of individuals engaging in personal development activities such as studying, attending workshops, or practicing mindfulness.
•	Images representing concepts like growth, achievement, teamwork, and personal transformation.
•	Pictures of landscapes, nature, and inspirational scenes reflecting the brand's values.
•	Book suggestions and YouTube video links featuring self-help insights.
Audio and Video Content: Investing in Potential will create and incorporate audio and video content to provide dynamic and engaging material. This includes podcasts, webinars, instructional videos, and user-generated content to enhance learning and interaction.
SEO and Digital Marketing: To maximize visibility and reach, Investing in Potential will implement SEO strategies to improve search engine rankings and drive organic traffic to the website. Digital marketing initiatives, such as social media advertising, email campaigns, and influencer partnerships, will be utilized to expand the organization's online reach and attract new audiences. A partnership with IIEMSA’s Kaizen society has already been established. Logo variations in different sizes and formats will be used across sections of the website and promotional materials to create brand identity.
Technical Infrastructure: Investing in robust technical infrastructure, including web hosting services, domain registration, security protocols, and backup systems, is crucial to ensure the website's reliability, performance, and security.
Community Management: Building and nurturing an online community requires dedicated resources for community management, moderation, and engagement. Investing in Potential will appoint community managers and moderators to facilitate discussions, address user queries, and maintain a positive and supportive environment within the online community. Testimonials from past members of the IIP family will be showcased in the community hub to encourage others to participate.




















Website Pages and Content

 


Improvements to part 1

gallery Changes (HTML):
•	Added id="gallery" to the div containing the gallery images for specific styling.

•	Ensured the gallery images are uniformly sized and include hover effects for better user interaction. 

•	Added id="video-section" to the div containing videos for specific styling. Included video elements with controls and posters for a consistent visual presentation. 


library Changes (HTML):
•	Added id="library-main" to the main element to apply library-specific styles. 

•	Added an image at the top of the library page for visual appeal. 

•	Organized content into sections with headings for "Recommended Videos" and "Recommended Books". 

•	Used iframes for embedding YouTube videos, ensuring they are styled to be responsive and centered. 

•	Listed recommended books with their titles, authors, and descriptions, styled using the new CSS rules. 


Changes for the Courses Page (HTML): 
•	Image: Added an alt attribute to the header image for accessibility. 

•	Main ID: Assigned an id="courses-main" to the main element to apply course-specific styles. 

•	Courses Section: Organized the course information into div elements with the class course for better structure and styling. 

Changes for the Contact Page (HTML): 
•	Main ID: Assigned an id="contact-main" to the main element for contact page-specific styling.

 Changes for the Community Hub Page (HTML): 
•	Grouped content into separate <section> elements for better structure and styling. 

•	Added an ID (id="community-main") to the main element for community page-specific styling. 

•	Moved the testimonial videos section outside of the main element to maintain semantic structure.











Part 3 additions
Improvments to  part 2

Changes to website assets lists :
•	made to be more comprehnsive and well ordered.

•	included other assests required for developing a websitesuch as getting domain name, and description of included audio and video.

Changes to HTML:
•	Removed hyperlink for current page on navigation menu to distinguish the current page from the other web pages.

•	Made it to the title in the head section depicts the name of the business and the name of the page on all web pages.

•	Removed redundent code and spacing.

Changes to library.html:
•	The CSS rules in styles.css create a responsive container for the videos, ensuring they maintain a 16:9 aspect ratio and scale properly on different screen sizes.

•	Each video iframe in the HTML is wrapped inside a div with the class video-container to apply the responsive styling.






 JavaScript

JavaScript File (javascript.js):
•	It contains functions to manage the slideshow modal, including showing and hiding it, and updating its content.
•	It also includes functions to show the next and previous images or videos in the slideshow.
•	Event listeners are added to buttons for toggling between the view of all images, all videos, and the slideshow view.

 
 
 
 
1. Gallery Slideshow Management
•	Initialization: The script waits for the DOM to fully load before executing.
•	Element Selection: Selects various elements related to the gallery and slideshow.
•	Modal Display: Functions to show and hide a modal for displaying images or videos in a slideshow format.
•	Content Update: Updates the content of the modal based on the current index, either displaying an image or a video.
•	Navigation: Provides functionality to navigate to the next or previous item in the slideshow.
•	View Toggle: Allows switching between viewing all images, all videos, or the current slideshow view.
•	Initial State: Sets the initial display state of the gallery, videos, and buttons.
2. Contact Form Validation
•	Initialization: Ensures the script runs only after the DOM is fully loaded.
•	Element Selection: Selects the contact form and its input elements.
•	Clear Initial Values: Clears the initial placeholder values in the input fields when they are focused.
•	Form Validation: Validates that all critical fields (name, email, subject, message) are filled out before allowing form submission. If any field is empty, it prevents form submission and displays an alert.
Overall, this JavaScript code enhances user experience by providing an interactive gallery slideshow and ensuring that the contact form is correctly filled out before submission.

CSS File (styles.css):
•	Styles for the modal and its content, including positioning and visibility.
•	Styles for the gallery layout and navigation buttons.

2.	HTML:
•	Includes buttons for switching views and the modal for the slideshow.
•	Ensures buttons and modal are correctly referenced in the JavaScript.
With these changes, the website will allow users to switch between viewing all images or videos at once and viewing them in a slideshow with a pop-up modal.

Seo
Home Page (index.html)
Title Tag:
•	The <title> tag is crucial for SEO as it tells search engines and users what the page is about. It includes the brand name and a concise descriptor ("Home").
Meta Description:
•	The meta description provides a brief summary of the page content. It includes keywords like "Investing in Potential Inc.", "programs", "services", "personal growth", and "professional growth" to attract relevant search traffic.
Navigation Links:
•	Implementation: Internal links to other pages (about.html, courses.html, community.html, gallery.html, contact.html, library.html) are included.

•	Explanation: Internal linking enhances site navigation and distributes authority across pages. It helps users and search engines explore related content.
About Us Page (about.html)
Title Tag:
•	Clearly identifies the page as "About Us" and includes the brand name for consistency and SEO relevance.
Meta Description:
•	Provides a concise overview of the page content, emphasizing keywords related to the organization's mission and services.
Navigation Links:
•	Implementation: Includes links to related pages (index.html, courses.html, community.html, gallery.html, contact.html, library.html).

•	Explanation: Internal links enhance site navigation and improve SEO by distributing authority and relevance across pages.
Courses Page (courses.html)
Title Tag:
•	Clearly identifies the page as "Courses" and includes the brand name for SEO relevance.
Meta Description:
•	Provides a concise overview of the page content, emphasizing keywords related to courses and personal/professional growth.
Navigation Links:
•	Implementation: Internal links to related pages (index.html, about.html, community.html, gallery.html, contact.html, library.html).

•	Explanation: Internal linking enhances navigation and SEO by connecting related content across the website.
Gallery Page (gallery.html)
Title Tag:
•	Clearly identifies the page as "Gallery" and includes the brand name for SEO relevance.
Meta Description:
•	Provides a concise overview of the page content, emphasizing keywords related to gallery, growth, learning, and community engagement.
Navigation Links:
•	Implementation: Internal links to related pages (index.html, about.html, courses.html, community.html, contact.html, library.html).
•	Explanation: Internal linking enhances navigation and SEO by connecting related content across the website.
Contact Us Page (contact.html)
Title Tag:
•	Clearly identifies the page as "Contact Us" and includes the brand name for SEO relevance.
Meta Description:
•	Provides a concise overview of the page content, emphasizing keywords related to contact, inquiries, collaborations, programs, services, and growth.
Navigation Links:
•	Implementation: Internal links to related pages (index.html, about.html, courses.html, community.html, gallery.html, library.html).
•	Explanation: Internal linking enhances navigation and SEO by connecting related content across the website.
Resource Library Page (library.html)
Title Tag:
•	Clearly identifies the page as "Resource Library" and includes the brand name for SEO relevance.
Meta Description:
•	Provides a concise overview of the page content, emphasizing keywords related to resource library, materials, insights, dimensions, and growth.
Navigation Links:
•	Implementation: Internal links to related pages (index.html, about.html, courses.html, community.html, gallery.html, contact.html).
•	Explanation: Internal linking enhances navigation and SEO by connecting related content across the website.


Forms
1. Contact Form on the Contact Page
HTML: The contact form is added to the "Contact" page of the website. The key HTML code for the contact form includes the following elements:
•	Form Tag: <form id="contactForm" action="mailto:hypotheticalemail@example.com" method="post" enctype="text/plain">
o	Uses the mailto: action to send the form data to a hypothetical email address.
o	The method is set to post, and the enctype is set to text/plain to send plain text data.

•	Name Field: <input type="text" id="name" name="name" value="Enter your name">
o	A text input for the user's name with a default placeholder value.

•	Email Field: <input type="email" id="email" name="email" value="Enter your email">
o	An email input for the user's email address with a default placeholder value.

•	Message Field: <textarea id="message" name="message">Enter your message</textarea>
o	A textarea for the user's message with a default placeholder value.

•	Submit Button: <input type="submit" value="Submit">
o	A button to submit the form.
JavaScript: Basic JavaScript validation and user experience enhancements are added:
•	Clear Field Functionality:
o	When a user clicks on an input field, the default value is cleared. This is achieved using the focus event.

•	Validation:
o	Before submitting the form, it checks if the name and email fields are filled out. If not, it displays an alert message.
2. Newsletter Signup Form (Google Form) on the Homepage
Google Form: A simple Google Form is created with the following elements:
•	Email Address Field:
o	A field where users can enter their email address.
•	Checkbox:
o	A checkbox with the label "Please send me your weekly newsletter".


