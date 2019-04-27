document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.hidden')) 
    
    return; 
    
    // Don't follow the link 
    event.preventDefault();
    
    // Log the cicked element in thje conlsole
    console.log(event.target);
    }, 
false);