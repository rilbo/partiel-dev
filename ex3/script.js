window.onload=function(){
    
    let tabParticipant = []
    let form = document.querySelector('#form')
    let ausort = document.querySelector('.ausort')
    let plusde5lettres = document.querySelector('.plusde5lettres')
    let h2 = document.querySelector('.result h2')

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let prenom = document.querySelector('.prenom').value.trim()
        tabParticipant.push(prenom)
        
        display(tabParticipant)
    })

    ausort.addEventListener('click', (e) => {
        e.preventDefault()
        tireAuSort(tabParticipant)
        h2.style.animation = 'rotate 2s'
    })

    plusde5lettres.addEventListener('click', (e)=> {
        e.preventDefault()
        let tabFilter = filter(tabParticipant)
        display(tabFilter)
    })

}

function display(tab, affich='.display') {
    document.querySelector(affich).innerHTML = ""	
    tab.forEach(index => {
        let p = document.createElement('p')
        p.innerHTML= index
        document.querySelector(affich).append(p)
    })
}

function tireAuSort(tab){
    let length = tab.length
    let rand = getRandomInt(length)
    document.querySelector('.result h2').innerHTML = tab[rand]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function filter(tab) {
    return tab.filter(name => name.length > 5)
}


		
		
		