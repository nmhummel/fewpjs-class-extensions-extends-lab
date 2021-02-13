// sideArray = 1, 2, 3, 4, 5

  
class Polygon {
    constructor(sideArray) {
      this.sideArray = sideArray
      this.count = this.sideArray.length
    }

    get countSides() {
        return this.count
    }

    get perimeter() {
        this.isArr();
        let sideSum = 0;
        for (let i of this.sideArray) {
            sideSum += i
        }
        return sideSum
    }

    isArr(){
        if (!Array.isArray(this.sideArray)) return;
    }
}

class Triangle extends Polygon {

    get isValid() {
        this.isArr();
        if (this.count !== 3) return;
        let s1 = this.sideArray[0]
        let s2 = this.sideArray[1]
        let s3 = this.sideArray[2]
        return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
    }
}

class Square extends Polygon {

    get isValid() {
        this.isArr();
        if (this.count !== 4) return;
        let s1 = this.sideArray[0]
        let s2 = this.sideArray[1]
        let s3 = this.sideArray[2]
        let s4 = this.sideArray[3]
        return ((s1 === s2) && (s1 === s3) && (s1 === s4))
    }

    get area() {
        this.isArr();
        if (this.count !== 4) return;
        let s1 = this.sideArray[0]
        let area = s1**2
        return area;
    }
}