# Screen Temperature Study Presentation Website

This presentation website showcases the findings from the research study on screen temperature effects on visual performance and cognitive processing.

## Website Structure

The website is organized into the following sections:

1. **Overview** - Summary of the study and key findings
2. **Methods** - Research methodology and analysis approach
3. **Direct Effects** - Results from regression analysis
4. **Mediation** - Results from mediation analysis
5. **Conclusions** - Summary of findings and implications

## Hosting on GitHub Pages

To host this website using GitHub Pages and link it to your domain:

1. **Create a GitHub repository**
   - Go to GitHub.com and create a new repository
   - Name it something descriptive (e.g., `color-temperature-study`)

2. **Push the website files to the repository**

   ```bash
   # Initialize a Git repository in the website folder
   cd /path/to/website_presentation
   git init
   git add .
   git commit -m "Initial commit of presentation website"
   
   # Add your GitHub repository as remote and push
   git remote add origin https://github.com/yourusername/screen-temperature-study.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at `https://yourusername.github.io/screen-temperature-study/`

4. **Link Your Custom Domain**
   - In the GitHub Pages settings, enter your custom domain in the "Custom domain" field
   - Add a CNAME record at your domain registrar pointing to `yourusername.github.io`
   - Wait for DNS propagation (can take up to 48 hours)
   - Your website will be available at your custom domain

## Presenting with This Website

This website is designed to support your presentation:

1. **Begin with the overview** - Start with the hero section and overview to introduce your study
2. **Navigate through each section** - Use the navigation menu to move through sections as you present
3. **Interactive elements** - Use the tabs and carousels to show different visualizations as needed
4. **Responsive design** - Works on all devices, allowing audience members to follow along

## Customizing the Website

To update the website with additional findings or visualizations:

1. **Add images** - Place new images in the `images` folder
2. **Update HTML** - Modify the content in `index.html`
3. **CSS styling** - Customize styles in `css/styles.css`
4. **Add interactivity** - Enhance JavaScript in `js/main.js`

## Image Files

Important: The website uses several placeholder images that should be replaced with your actual research visualizations:

- `hero-bg.jpg` - Background image for the hero section
- `study_design.png` - Diagram of your study design
- `mediation_model.png` - Diagram of your mediation model

## Technical Details

The website uses pure HTML, CSS, and JavaScript without external libraries or frameworks for simplicity and ease of hosting on GitHub Pages.

---

© 2025 Screen Temperature Research Study
