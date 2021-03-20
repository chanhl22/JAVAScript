let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        //alert(this.step);
        console.log(this.step);
        return this
    }
};

console.log(ladder.up().up().down().showStep()); // 1