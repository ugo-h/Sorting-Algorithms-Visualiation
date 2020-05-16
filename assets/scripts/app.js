import { bubbleSort } from './sort/bubbleSort.js';
import { selectionSort } from './sort/selectionSort.js';
import { insertionSort } from './sort/insertionSort.js';
import { mergeSort } from './sort/mergeSort.js';
import { renderArr, generateArr } from './arrayRender.js';
import {highlightSorted, renderSortStep } from './render.js'

const root = document.getElementById('root');

const WIDTH = 600;
const HEIGHT = 600;

const backdrop = document.querySelector('.backdrop');
const slideInMenu = document.querySelector('.slider-menu')
const sortBtn = document.querySelector('.btn-sort');
const selectSortBtn = document.querySelector('.btn-select');
const arraySizeRange = document.getElementById('array-size-range');
const arraySpeedRange = document.getElementById('array-speed-range');

const arr1 = [2, 10, 7, 3, 1, 6, 20, 12, 13, 11, 5];
const arr2 = generateArr(30);

let delay = 200;
let currentSort = 'bubble';

const sortTypes = {
    'bubble': bubbleSort,
    'selection': selectionSort,
    'insertion': insertionSort,
    'merge': mergeSort
};

root.setAttribute('height', HEIGHT);
root.setAttribute('width', WIDTH);

selectSortBtn.innerText = currentSort + ' sort';

renderArr(arr2);
let arrElements = [...document.querySelectorAll('g')];

sortBtn.addEventListener('click', sortHandler);
arraySizeRange.addEventListener('input', arrSizeHandler);
arraySpeedRange.addEventListener('input', sortSpeedHandler);
selectSortBtn.addEventListener('click', ()=> {
    slideInMenu.classList.toggle('hidden')
    backdrop.classList.toggle('removed');
});
backdrop.addEventListener('click', ()=>{
    slideInMenu.classList.toggle('hidden')
    backdrop.classList.toggle('removed');
})
slideInMenu.addEventListener('click', (event)=> {
    if(event.target.tagName==='LI'){
        console.log('yeah!', event.target)
        currentSort = event.target.id;
        selectSortBtn.innerText = currentSort + ' sort';
        
        slideInMenu.classList.add('hidden')
        backdrop.classList.add('removed');
    }
})


function arrSizeHandler(event) {
    const volume = parseInt(event.target.value);
    const arr = generateArr(volume);
    renderArr(arr);
    arrElements = [...document.querySelectorAll('g')];
}

function sortSpeedHandler(event) {
    const volume = parseInt(event.target.value);
    delay = 602 - volume;
}

function sortHandler() {
    sortBtn.disabled = true;
    selectSortBtn.disabled = true;
    arraySizeRange.disabled = true;
    sortBtn.innerText = 'sorting...'
    const sortingAlgorithm = sortTypes[currentSort](arrElements);
    const timeout = setTimeout(sortVisualizer.bind(null, sortingAlgorithm), delay);
}

function sortVisualizer(sortingAlgorithm) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(sortingAlgorithm.next())
        }, delay*0.2)
    })
    .then((data)=>{
        const {value, done} = data;
        console.log(done)
        if(!done) {
            setTimeout(sortVisualizer.bind(null, sortingAlgorithm), delay);
            
        }else{
            sortBtn.innerText = 'SORT';
            sortBtn.disabled = false;
            arraySizeRange.disabled = false;
            selectSortBtn.disabled = false;
            const  finalRun = highlightSorted(arrElements);
            const finalRunInterval = setInterval(()=>{
                const {done} =  finalRun.next();
                if(done) {
                    clearInterval(finalRunInterval);
                    console.log('done')
                }
            }, 30 * 10/arrElements.length);
            return;
        };
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log(value)
                resolve(renderSortStep(...value));
            }, delay*0.6)
            
        }).then(()=> {return});
    })
}


