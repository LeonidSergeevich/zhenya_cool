class Man {
    constructor(country, city, name, secondName, weight, height, fate) {
        this.country = country;
        this.city = city;
        this.name = name;
        this.secondName = secondName;
        this.weight = weight;
        this.height = height;
        this.fate = fate;
    }
}

class Show {
    static createUl(Obj) {
        let ul = document.createElement("ul");
        for (let key in Obj) {
            if (Obj.hasOwnProperty(key)) {
                ul.appendChild(Show.createLi(key + ' : ' + Obj[key]));
            }
        }
        document.body.appendChild(ul);
    }
    static createLi(content) {
        let li = document.createElement("li");
        li.innerHTML = content
        return li;
    }
}

let ManObj = new Man('Minsk', 'Minsk', 'Jendos', 'Egorov', 85, 185, 'chiller');
document.addEventListener("DOMContentLoaded", function () {
    alert('Hello!')
    Show.createUl(ManObj);
});