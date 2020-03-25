transferQueryParams($('.uconc'));

function transferQueryParams($links) {
    const url_string = window.location.href;
    const url = new URL(url_string);

    url.searchParams.forEach((value, key) => {
        $links.each(function() {
            const elemHref = $(this).attr('href');
            const elemUrl = new URL(elemHref);
    
            const elemValue = elemUrl.searchParams.get(key);
    
            let newElemHref = $(this).attr('href');
            
            const authorized_keys = ['reserved_code_media', 'utm_source', 'utm_campaign', 'utm_medium'];
    
            if (authorized_keys.includes(key)) {
    
                if (newElemHref.indexOf('#') >= 0) // Remove # at the end of url
                    newElemHref = newElemHref.slice(0, newElemHref.indexOf('#'));
                if (!newElemHref.includes('?'))  // Insert ? if not present
                    newElemHref += '?';
    
                if (elemValue) {
                    newElemHref = newElemHref.replace(`${key}=${elemValue}`, `${key}=${value}`);
                    //console.log(`replaced ${key}=${elemValue} by ${key}=${value}`) // ## Uncomment to debug
                } else {
                    newElemHref += `&${key}=${value}`;
                    //console.log(`added ${key}=${value}`) // ## Uncomment to debug
                }
        
                $(this).attr('href', newElemHref);
            }
        });
    });
}