import Matter from "matter-js";
import Pipe from './Pipe';
import PipeTop from './PipeTop';

let tick = 0,
    pose = 1,
    pipes = 0;

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const resetPipes = () => {
    pipes = 0;
}

export const generatePipes = () => {
    let topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT / 2) - 100);
    let bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;

    let sizes = [topPipeHeight, bottomPipeHeight]

    if (Math.random() < 0.5) {
        sizes = sizes.reverse();
    }

    return sizes;
}

export const addPipesAtLocation = () => {
}


const Physics = () => {
    
};

export default Physics;