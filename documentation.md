###### Web Design for Industry SWD600
###### Project Report (Live Brief) & Artefact
# Pattern Library
By Ewelina Singh

Click [here](https://patternlibrary-12fad.firebaseapp.com/#/) to access the PatternLibrary.
Click [here](https://github.com/ewelinasingh/patternlibrary/) to access the PatternLibrary GitHub repository.

### Introduction
A pattern library, also called a framework, is a tool which enables web designers and developers to keep consistency within their products. Such frameworks provide website elements like buttons, preset heading styling and even whole headers and footers. The aim of this project is to create a modern and responsive pattern library from scratch as well as a documentation website to showcase the components and the variations provided by the pattern library and explain how to implement them.

### Research
As outlined by [Rebecca Sorensen](https://medium.com/sumo-logic-ux/creating-a-pattern-library-18cce0f901b4), investing time in building own pattern library comes with two major benefits. These are efficiency and consistency. In the long run, implementing from a pattern library instead of writing each element from scratch every time will save a lot of time as well as provide consistency in the size, colours and style of elements. 

[Jack Davies](https://medium.com/@whatjackhasmade/pattern-libraries-abcc45c6144c) states that a pattern library should have a minimum of 5 elements such as buttons, footer, header, jumbotron and a navigation bar.
In this [Webcredible article](https://www.webcredible.com/blog/element-design-pattern-library-good-practice-and-top-tips/), Jack Josephy explains that a good pattern library must have design principles. He states that these design principles need to be unique, specific, memorable as the pattern library essentially represents a brand who has created it and that 3-5 of these design principles is enough. 
[Material Design](https://material.io/design/) is a framework which is explicitly created with design principles in mind and 
[Vuetify](https://vuetifyjs.com/) is another framework which is for semantic development and is designed specfically for Vue.js. It has been developed using Google's Material Design specification.
One of the most popular frameworks right now is [Bootstrap](https://getbootstrap.com/) as it provides a responsive, mobile-first component library. The Bootstrap documentation comes with instructions on how to implement different elements as well as code snippets which can be copied and pasted directly into the designer's code.

### Design Process Methods
##### Project Management
This project was created using the incremental software life-cycle model. This means that the project was split into increments and each increment was fully completed before commencing with the next one. The documentation website was initialised. After this, each component was designed, developed, tested and implemented (documented on the PatternLibrary documentation website) as shown in the diagram below. When all the components were fully finalised, the home page of the documentation website was developed. This approach was chosen to aid time management, therefore in case of running out of time or other emergencies, there would still be fully completed components which could be used in the pattern library.

![Incremental Software Life-cycle Model Diagram](https://lh3.googleusercontent.com/cukz38M4mST97reExKHRbwNZMK6AOUi1bVGVBBzFL0QyX-1jhJ35ueRis2sySbDT31J6mSM99b9RWA "Incremental Software Life-cycle Model Diagram")
Diagram: Incremental Software Life-cycle Model Diagram

To further assist the time management of this project, a Gantt Chart was created as shown below.
![Gantt Chart](https://lh3.googleusercontent.com/6aUv3Xnv3Crg52HG0EunUrI57Z9qsqZDUpeg4klZW9A4JaPWzx_cBStqBYZEwgD9judbq72UdtLkwQ "Gantt Chart")
Figure: Gantt Chart

##### Test Plan
The development tool used for this project is [Cloud9](https://c9.io/) which means that during the development process, the code will be checked for errors in real time. Cloud9 also has a live preview which means that any changes made to the code automatically refresh the preview in the browser. This makes testing of the components much faster as all changes made are seen simultaneously.
The deployed website will be tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/). Audits will be run on each page and a score out of a 100 will be awarded for the performance, accessibility, best practices and SEO.
To gain feedback on the finished pattern library, 10 participants will be asked to fill out a survey which is shown below. These questions are supposed to gain the participant's opinions on whether the pattern library consists of enough components, variations and if it is easy to use and implement. The feedback to this questionnaire will determine whether the pattern library is successful or not.

![enter image description here](https://lh3.googleusercontent.com/jl0T4lDoyDpCbTzK_cpUDvktiaw5CcxS3TVOHqSgIYuatTTwjo68rM_L2Dtlu34hDEUG4VXPoJrWtw)
![enter image description here](https://lh3.googleusercontent.com/_1zAFaL6c_w_ZgJGJEAm2jxwHRCBoRFGh3jTIEK0SihiqUQ52EXxMYIYs-Xztynw435qwoOtPDGLpQ)
![enter image description here](https://lh3.googleusercontent.com/_sf3ol9almq-jdt2ovM64Yer4SoZLtXdg73pvCZMqQbJ5BmBlXmom7ktyjuXtxFUy4WCqTbQhmv9cA)
Figure: Feedback Survey Questions

### Specification
This pattern library is a simple framework with only 7 components.
##### Components
- Navigation Bar - to contain different layout variations and colour options.
- Header - a hero image type.
- Jumbotron - a call to action to enable subscription.
- Buttons - different colour options (filled or bordered), hover effects, size and width variations.
- Footer - to contain three columns.
- Scrollbar - width and colour variations.
- Grid System - using flexbox.

##### Documentation Website
- Navigation bar - at the top of the page.
- Home page - to introduce PatternLibrary and enable downloading.
- Pages - seperate page dedicated to each component.
- Explanation of each component and how to implement (with code snippets).

### Design, Planning, Experimentation & Implementation
##### Documentation Design Process & Planning
Designs were made for the components as well as the documentation website which is used to showcase the component elements and explain how to use them. The wireframe designs were created using [Wireframe.cc](https://wireframe.cc).

###### Documentation Website Wireframes
Medium-fidelity wireframes were created for the documentation website to make the developing process more efficient. As shown below, the navigation bar is designed to be at the top of the page. Each component has its own page to make it easy to navigate around the website and find the necessary information. Each component page has a clear heading, and will display the components as well as code snippets to show how that exact element was achieved.

![Documentation Website Home Page](https://lh3.googleusercontent.com/V0Cn44jofACaflPZHWTItTiV8rUTgZjVCZZTJmEoLun2xUxWNBrVIpvPWVFxfqF02p4cG8CeTbOHkA "Documentation Website Home Page")
Figure: Documentation Website Home Page.

![Documentation Website Component Page](https://lh3.googleusercontent.com/KeCU1soQIUCCbWZW6YPPv0hvsdQpMGNPdv8fW00lP7UZI-lQUzfQAQv5VILIsB5Uxjif7GP61vPuXQ "Documentation Website Component Page")
Figure: Documentation Website Component Page.

###### Component Elements Wireframes
Medium-fidelity wireframe designs were created for each component before developing it. The following wireframes show the different layouts and sizes of the elements. They do not show colour variations.

![Navigation Bar Component](https://lh3.googleusercontent.com/pwoslUFS7Vw8bqIPDRNtVBqIxp9g8izXhWwqY2MZRB5TwYJBobe5PEu4J72gxxD1kZJ1OCl8Rj7bxQ "Navigation Bar Component")
Figure: Navigation Bar Component.

![Header Component](https://lh3.googleusercontent.com/d1uCH2shp30xHqYiuLU53aSnBQD9Ohcjdp5VWwylQ619ICyeaGE0Qx3V_Ee69hfd19u92Neh-LSSJg "Header Component")
Figure: Header Component.

![Jumbotron Component](https://lh3.googleusercontent.com/QT37SaisIi7VCO9xWhuqhPtmEvg70rJW_GrL6cqND0_V3boUSnCef0UHHb6K9mipkrH-1Ba9Qz3YFg "Jumbotron Component")
Figure: Jumbotron Component.

![Button Component](https://lh3.googleusercontent.com/IyXX_Nak3VDFvlaELoPL__BSmmMZi-VZd415S8Mc3xCuPf2ut5FcIL15BnLLHYiLnSIfaKsDQTrakQ "Button Component")
Figure: Button Component.

![Footer Component](https://lh3.googleusercontent.com/uGNbq85OPDfRTYoYgTedNyb1aflRI7HcU8uwnNCq4mYdKuKQbhQhc3FQvlcVpRU4rnlsIsHgPWo1Ng "Footer Component")
Figure: Footer Component.

![Scrollbar Component](https://lh3.googleusercontent.com/htIUBoLaWVhjzBmje-DuEeYGIg3Zg1DRdGke4DFXQTv6wLP3_Te3N4NMafD7Fpnf4Y_8POI7q6HtMA "Scrollbar Component")
Figure: Scrollbar Component.

![Grid System Component](https://lh3.googleusercontent.com/kTttrEmV7v4oA98Qoodz6AiFht3zTfsSvhni1zxZCp5WWSaRjzOj2meLUQxxPN1HzVA7VPwo4B-RCA "Grid System Component")
Figure: Grid System Component.

##### Documentation of Construction of Pattern Library
Here is the final version of the component elements and the documentation website.

###### Navigation Bar
The final navigation bar component has a default navigation, right aligned and reversed order so the user can choose which one suits their website most. The navigation also comes in 4 colours, default grey, purple, blue and green. The navigation is responsive and its behaviour on a small screen is shown below.

![Navigation Component](https://lh3.googleusercontent.com/br4tCqs3R8S6ZXs5dStX_ZLi-xTlOvAU9HZ9UCf3WIl5vNRe67N91CHnxDzYUgfeVnpuZzOMsQ_Oog "Navigation Component")
Figure: Navigation Component.

![Mobile Version Navigation Component](https://lh3.googleusercontent.com/UHL3ArBorTI7vXTJceRjs7qJl4phhSfnhTiJ4xr6Ko80nanxZzPKJZO_b-Tr6RgjYr3YeiBRYP2XGQ "Mobile Version Navigation Component")
Figure: Mobile Version Navigation Component.

###### Header
The header is of hero image type and the below figures show how the header behaves on a desktop as well as mobile size screen.

![Header Component](https://lh3.googleusercontent.com/7JoMUEVvqqKjb7TgX_X4QRxGD5Pk0ajB1VUbA1_mNSlnW7UhjyoPWxi5OrudjYNeg_PwEQLCByL2kg "Header Component")
Figure: Header Component.

![Mobile Version Header Component](https://lh3.googleusercontent.com/2264HIAM6Dcf6vjlm71bpOUZjWYoJk2InrS4ktydusqa-el6eL20BW1IVyJ9Vzi0snM_E2T-SEgCHg "Mobile Version Header Component")
Figure: Mobile Version Header Component.

###### Jumbotron
The final version of the call to action jumbotron is shown below in both desktop nd mobile view.

![Jumbotron Component](https://lh3.googleusercontent.com/FozGUZ3UbbeGmPLrHHqjZECRZmp2uOfkHHsthNhcPkiJ9EUG3AxIu2criE6m5X7DybVknAuwlofe9g "Jumbotron Component")
Figure: Jumbotron Component.

![Mobile Version Jumbotron Component](https://lh3.googleusercontent.com/wH_z9VGrOul_KxyVkRzcxWqtrv9JBKUrhy4vb407rpHs6RlQxT8cWGmn46fCVsFxim4X-BJGLBGWug "Mobile Version Jumbotron Component")
Figure: Mobile Version Jumbotron Component.

###### Buttons
The variations of the button component are shown below. Please see the documentation website to see the different hover effects, width options and how the different widths behave on various screen sizes.

![Button Component](https://lh3.googleusercontent.com/NQbnQHBQ1uBhbW6JwrzjqhpI_iyRsiiSKdxXGwZDX2U7myhLIp1-hagEx_bXWwjhwV0O819iGss7Kw "Button Component")
Figure: Button Component.

###### Footer
The three column footer is shown below. The third column is used for social media links.

![Footer Component](https://lh3.googleusercontent.com/a7RMmt-liNHQ1P5c8C7zO2axkXg8tm7WihrpwaIELIU2aW72xEUTRk5vG1u-CdOO8x6kHDBu8NE_Zw "Footer Component")
Figure: Footer Component.

![Mobile Version Footer Component](https://lh3.googleusercontent.com/oux8uS-nuyZQ-13xIPKUYMil2i9LkrPGsDctfXiBdAkO0aa33gvXf-yN7aWAWU0DBa80TUgPJvPaCQ "Mobile Version Footer Component")
Figure: Mobile Version Footer Component.

###### Scrollbar
Here are the different sizes and colours available for the scrollbar. Note that custom scroll bars do not work on Firefox and Internet Explorer/Edge.

![Scrollbar Component](https://lh3.googleusercontent.com/w-EqWU5Ib15JeK1ZcEB71Xthhm9H0ln439qBngHieWSQE13zOTEHu67535LtNdAsty5wRU7mNigD7g "Scrollbar Component")
Figure: Scrollbar Component.

###### Grid System
Here is the Flexbox grid system component and its behaviour on different screen sizes.

![Grid System Component](https://lh3.googleusercontent.com/1A_w3TAvspsjuXOyofBNFjr8o6noD8AMsD1rJPOPLihmINst1irkMqk-36QA59KKw5KGgelcWLEYGw "Grid System Component")
Figure: Grid System Component.

![Mobile Version Grid System Component](https://lh3.googleusercontent.com/3RSkGPKQGy_8IfODqAO9JNr53pzBbcLuywgadEZjI_XDC5VEb7hXbAf8I2riquGxbDcm4geK4fTfPg "Mobile Version Grid System Component")
Figure: Mobile Version Grid System Component.

###### Documentation Website
The final documentation website is also responsive. The designs are based on the medium-fidelity wireframes created in the design phase. All pages are shown below in desktop view as well as some mobile view screens to show the responsiveness. The home page briefly introduces the pattern library, enables downloading of the library and shows how to implement the library. The component pages show the elements, explain what they are and what variations are available as well as showcase the code used to create them so the user can easily implement them by copying and pasting the code snippets. 

![Documentation Website Home Page](https://lh3.googleusercontent.com/8t4TIfgKWPZzj8ZF93vGiRyVM3CPEjx6cNOBdImblSf7vfXaCwmP278jnAfVALVStL6waWbd4u3RLA "Documentation Website Home Page")
Figure: Documentation Website Home Page.

![Documentation Website Navigation Component Page](https://lh3.googleusercontent.com/yp-YeOGBKpxnSJ-vCHx6twrbvGucL0USBOS4s7wF2yUEy_ZxLb2BlYWtKwTQY_OlkoCLssBJ7hLtBA "Documentation Website Navigation Component Page")
Figure: Documentation Website Navigation Component Page.

![Documentation Website Header Component Page](https://lh3.googleusercontent.com/quhzwqoDU5GDRimgGO2q6O4_lppDoY2Zkfuc3QAJ-nvguP8WgsJ1IQlKKGILuwBdPrymGSHNJRep-Q "Documentation Website Header Component Page")
Figure: Documentation Website Header Component Page.

![Documentation Website Button Component Page](https://lh3.googleusercontent.com/JcdmeDSJSY6WC0MOYFaJ1M25Iux23IX9vMSMGrSbgB55n6I1dgRADwAzzqz5-WzLmssEsNziRY2ViA "Documentation Website Button Component Page")
Figure: Documentation Website Button Component Page.

![Documentation Website Jumbotron Component Page](https://lh3.googleusercontent.com/48yC1AkewhDyYc6WiNikE4qfINwwSp87gZWh22ncvyaucoc7FaBqDZTlTXEctBV_udgm1sGrB-1iiQ "Documentation Website Jumbotron Component Page")
Figure: Documentation Website Jumbotron Component Page.

![Documentation Website Footer Component Page](https://lh3.googleusercontent.com/tn0trW_M17mkgd2xjZ2hRpoqMF5raCW2h-MY3l81_F6-J8IxSLZbc2q5soiAztqNmANULxMYNTP4hA "Documentation Website Footer Component Page")
Figure: Documentation Website Footer Component Page.

![Documentation Website Scrollbar Component Page](https://lh3.googleusercontent.com/s3prQpEGcI_7RGbqB3d5zZ3MFZLdgmhU2UlXONvCA_XjNxokQuXzEZlc4h8ZSawPmWwV0pgr0QWFNw "Documentation Website Scrollbar Component Page")
Figure: Documentation Website Scrollbar Component Page.

![Documentation Website Grid System Component Page](https://lh3.googleusercontent.com/YFm9J4GYz8Wdvz8GABN1tHirkRlTGKbe6dl3vkxWaxFzCRiHb3OrzePTLLyF2lmbHqnuhd_A5nTZgA "Documentation Website Grid System Component Page")
Figure: Documentation Website Grid System Component Page.

![Documentation Website Home Page, Navigation and Component Page in Mobile View](https://lh3.googleusercontent.com/pkojQiv3iiHd7ghIgwQKF5jhvKq_0aiNaUftuwj6JPD6ztXuhLvrdHoXZ-wp_c7JVrLw4D5MR8H5mg "Documentation Website Home Page, Navigation and Component Page in Mobile View")
Figure: Documentation Website Home Page, Navigation and Component Page in Mobile View.

## Testing Results
#### Google Lighthouse Audits
The deployed documentation website was run through Google Lighthouse and audits were made. The following scores were awarded for each page.
![Google Lighthouse Testing](https://lh3.googleusercontent.com/_pUKloMa1qT5eQXiNv6oQ9yG061nPR5leJvLrxcHSfbQdGCxgLiu4Hr2YFWX6LIWNumO9qtRHDMBSw "Google Lighthouse Testing")
Figure: Google Lighthouse Testing.

#### Feedback Survey Results
10 participants have filled out the feedback survey and the results can be seen below.
![enter image description here](https://lh3.googleusercontent.com/3JiDpmtwy1rowOCN5toDV5zuybPchby-NRHNKL5xyMa6W8vCA2T_MC7DxNu7ZxufvergsOphkKU3kA)
![enter image description here](https://lh3.googleusercontent.com/oXxSID29LkRRfx0WCodS58Fd9xTk5yUc0NaDK4ojuBEyPHZGwwlkjVp8QCMrYL_NtQ0KVULJvXJm5A)
![enter image description here](https://lh3.googleusercontent.com/BLUl-LJe6p5f9XJgxz3nSIxMU-oBCSIQ3-AYpWvwm8uySD_mqZoOQZvFtF_mU7J3Uw7B2gabqYYFKA)
![enter image description here](https://lh3.googleusercontent.com/uE4nWiJrRlIEq_YECeqqvhgYS4hYdwr4P15irYc5JV7wbkoLMBR3KT86Ui3WcecJzO7CJbVMKLu_Hg)
![enter image description here](https://lh3.googleusercontent.com/zG1BkMgZPhaSyeOSzppIjt2TNS5XWTstU-MLbcYnElSikzPuVIFgNJWN2pbVFYvnhbJIDo5_YAFgZA)
![enter image description here](https://lh3.googleusercontent.com/__YR4haBnUI9cyf6LGSd8Ax8X1j1Eh1z6wweyIMyWGqklzxe-ax5gmyTJRp7h9V0pEp-t7neYhn_Cg)
![enter image description here](https://lh3.googleusercontent.com/3-Mep6HIAHkZwyJZBVLCCWIkxs8FjWaYFYfNRxlewkJxYp9jzY-OwLCqShjqgfmxYcvogIBgWXyY_g)
![enter image description here](https://lh3.googleusercontent.com/7bCDPUauuMg2SE8EFs8etfLlLRGZv8iKKvhIDen8OgZBim7cWTMgvfAeMFYYB-1ySuctBfnky7_QVg)
![enter image description here](https://lh3.googleusercontent.com/O4Rkq6717Ql3HRjwA5rzuwmCKZTx-iwxMa0s4ljO-EXkPTil7JVoLVnQLic3fjnh8xYGqikYsbGzeA)
![enter image description here](https://lh3.googleusercontent.com/EnCjTxlCWNEOHQHnctK1J69PD55NIuXdHY_BnDHQlx8Fm9jgNYIZYEuut8XmlhXY3GugRHxMJ8PUYw)
Figure: Feedback Survey Results

## Discussion
#### Performance Results
The Google Lighthouse audits show that the performance of the website is very good as the scores vary between 95 and 96. The website uses best practices as the score is 100 for all pages. The accessibility and SEO could be improved as the scores for both vary between 77 and 88, with the colour code dropping from green down to amber. Overall, the audit results are excellent and show that the website performs well.

#### User Testing
100% of participants have stated that the PatternLibrary documentation website is easy to navigate which shows that the medium-fidelity wireframes which were used for the development of the website were successful.
100% of participants have also stated that the components are explained well and are easy to implement. This shows that showing the component on the page, explaining it using text and also providing the code snippet is a good way of presenting the components as this makes it easy to understand.
100% of participants have agreed that the PatternLibrary is easy to download which shows that placing the Download button right on the home page is a good idea as it means the user does not have to search the website for the downlaod option. 
70% of respondents have agreed that the colour variations provided for the components are appealing. This means that 30% of respondents did not find the colours suitable.
80% of participants have stated that there are enough variations for the navigation bar, which means that 20% were not satisfied with the choice of navigations. 
All participants have agreed that there are enough button variations which shows that they were satisfied with the colour choices, size and width options and the hover effects available.
8 out of 10 participants have found the grid system easy to use which shows that it was designed well.
100% of respondents have agreed that the components are consistent in style which shows that the PatternLibrary follows the consistency design principle.
4 participants have also commented that the PatternLibrary is easy to navigate and to utilise. This shows that the documentation website design works well and that the component pages explain the elements in enough detail.

## Conclusions
Based on the user feedback, the PatternLibrary components are easy to utilise and the style is consistent. Mostly, participants were satisfied witht he amount of variations of the elements. The colours could have been better chosen or more colours available to satisfy a wider range of users. To do this, high-fidelity wireframes of the components could have been designed and a feedback survey could be conducted to find out if the users find the colours appealing or even allow the participants to choose their preferred colours. This would be beneficial because a pattern library might not be just used by the creator but also by others, so the colours should be chosen carefully to appeal to a wider audience.

The user testing has also shown that users would prefer a wider range of navigation bar layouts and options. This also shows that the project would benefit from conducting a feedback questionnaire before starting the development phase, in order to find out if the users are satisfied with the component variations. The navigation bar could benefit from a search box option, a drop down link, a hamburger menu and hover effects.

The documentation website itself has shown to be successful as the survey respondents have agreed that it is easy to navigate and that the layout makes the components easy to understand.

Overall, the project has proved to be successful due to the high scores on audits and positive feedback results.

## References
https://medium.com/sumo-logic-ux/creating-a-pattern-library-18cce0f901b4
https://medium.com/@whatjackhasmade/pattern-libraries-abcc45c6144c
https://www.webcredible.com/blog/element-design-pattern-library-good-practice-and-top-tips/
[https://material.io/design/](https://material.io/design/)
https://vuetifyjs.com/
https://getbootstrap.com/

