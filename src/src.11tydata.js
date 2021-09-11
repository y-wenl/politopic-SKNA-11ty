// adapted from Jerôme Coupé, https://www.webstoemp.com/blog/from-jekyll-to-eleventy/

module.exports = {
    url: "https://www.demokra.net",
    baseUrl: "/skna/",
    author: "N. White",
    buildDate: (new Date().getFullYear()) + "-" + String(new Date().getMonth() + 1).padStart(2,'0') + "-" + (new Date().getDate()),
    dobToAge: dobstr => {
        var today = new Date();
        var dob = new Date(dobstr);

        var age = today.getFullYear() - dob.getFullYear();
        if ( (today.getMonth() < dob.getMonth()) || ( (today.getMonth() == dob.getMonth()) && (today.getDate() < dob.getDate()) ) ) {
            age = age - 1;
        }
        return age;
    },
    stripHTTP: url => {
        return url.replace("http://", "").replace("https://", "")
    },
};
