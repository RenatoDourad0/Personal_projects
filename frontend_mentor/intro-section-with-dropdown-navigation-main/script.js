const features = document.getElementById('features'),
  company = document.getElementById('company'),
  menuCompany = document.getElementById('menu-company'),
  menuFeatures = document.getElementById('menu-features');

menuFeatures.addEventListener('mouseover', () => {
    features.style.display = 'inline-block';
})
features.addEventListener('mouseleave', () => {
  features.style.display = 'none';
})

menuCompany.addEventListener('mouseover', () => {
    company.style.display = 'inline-block';
})
company.addEventListener('mouseleave', () => {
  company.style.display = 'none';
})
