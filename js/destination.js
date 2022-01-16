function changedest(x)
{
    switch (x) {
        case 1:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='inline-block';
            }
            else
            {
                
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='flex';
            }
            
            break;
        case 2:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('destmars').style.display='inline-block';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='none';
            }
            else
            {
                document.getElementById('destmars').style.display='flex';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='none';
            }
            break;
        case 3:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='inline-block';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='none';
            }
            else
            {
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='flex';
                document.getElementById('desttitan').style.display='none';
                document.getElementById('maindest').style.display='none';
            }
            break;
        case 4:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='inline-block';
                document.getElementById('maindest').style.display='none';
            }
            else
            {
                document.getElementById('destmars').style.display='none';
                document.getElementById('desteuropa').style.display='none';
                document.getElementById('desttitan').style.display='flex';
                document.getElementById('maindest').style.display='none';
            }               
            break;


      }

}

function changecrew(x)
{
    switch (x) {
        case 1:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('maindouglas').style.display='table';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='none';
            }
            else
            {
                document.getElementById('maindouglas').style.display='flex';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='none';
            }        
            break;
        case 2:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='table';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='none';
            }
            else
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='flex';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='none';
            }
            break;
        case 3:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='table';
                document.getElementById('mainansa').style.display='none';
            }
            else
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='flex';
                document.getElementById('mainansa').style.display='none';
            }
            break;
        case 4:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='table';
            }
            else
            {
                document.getElementById('maindouglas').style.display='none';
                document.getElementById('mainmark').style.display='none';
                document.getElementById('mainvictor').style.display='none';
                document.getElementById('mainansa').style.display='flex';
            }               
            break;
      }
}


function changetechno(x,y)
{
    console.log(y);
    document.getElementById('this').id='';
    y.id='this';
    switch (x) {
        case 1:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('vehicle').style.display='flex';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='none';
            }
            else
            {
                document.getElementById('vehicle').style.display='inline-block';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='none';

            }               
            break;
        case 2:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='flex';
                document.getElementById('spacecapsule').style.display='none';
            }
            else
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='inline-block';
                document.getElementById('spacecapsule').style.display='none'; 
            }
            break;
        case 3:
            if (window.matchMedia("(max-width: 770px)").matches)
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='flex';
            }
            else
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='inline-block'; 
            }
            break;
      }

}


function changetechno(x,y)
{
    document.getElementById('this').id='';
    y.id='this';
    switch (x) {
        case 1:

            if (window.matchMedia("(max-width: 770px)").matches) {

                document.getElementById('vehicle').style.display='inline-block';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='none';
            }
            else
            {
                document.getElementById('vehicle').style.display='flex';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='none';
            }
            
            break;
        case 2:

            if (window.matchMedia("(max-width: 770px)").matches) {

                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='inline-block';
                document.getElementById('spacecapsule').style.display='none';
            }
            else
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='flex';
                document.getElementById('spacecapsule').style.display='none';
            }



            break;
        case 3:

            if (window.matchMedia("(max-width: 770px)").matches) {

                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='inline-block';
            }
            else
            {
                document.getElementById('vehicle').style.display='none';
                document.getElementById('spaceport').style.display='none';
                document.getElementById('spacecapsule').style.display='flex';
            }

            
            break;
      }

}

function openmenu()
{
    var m = document.getElementById('menuphone');
    m.style.display='block';
    var x=document.getElementById('bdy');
    x.classList.add('op');
}

function closemenu()
{
    var c = document.getElementById('menuphone');
    c.style.display='none';
    var x=document.getElementById('bdy');
    x.classList.remove('op');
}

function openmenucrew()
{
    var m = document.getElementById('menuphone');
    m.style.display='block';
    var x=document.getElementById('bdy');
    x.classList.add('op');
    var elems = document.getElementsByClassName('change');
    for (var i=0;i<elems.length;i++)
    {
        elems[i].style.display = 'none';
    }
    var elems1 = document.getElementsByClassName('this');
    for (var i=0;i<elems1.length;i++)
    {
        elems1[i].style.display = 'none';
    }

}

function closemenucrew()
{
    var c = document.getElementById('menuphone');
    c.style.display='none';
    var x=document.getElementById('bdy');
    x.classList.remove('op');
    var elems = document.getElementsByClassName('change');
    for (var i=0;i<elems.length;i++)
    {
        elems[i].style.display = 'block';
    }
    var elems1 = document.getElementsByClassName('this');
    for (var i=0;i<elems1.length;i++)
    {
        elems1[i].style.display = 'block';
    }
    
}