export default class Timer {
    
    private DAY = 3600 * 24;

    constructor(seconds?: number) {
        if(seconds) {
            this.days = 0;
            this.convertTicksToDays(seconds);
        }
        else {
            this.ticks = 0;
            this.days = 0;
        }
    }

    public ticks: number;
    public days: number;

    public tick(): Timer {
        this.ticks++;
        if(this.ticks >= this.DAY) {
            this.days++;
            this.ticks = 0;
        }
        return this;
    }
    
    public toString() {
        let hoursText = '';
        let minutes = 0;
        let remainingSeconds = this.ticks;
        if ( (this.ticks / 3600) >= 1) {
            const hours = (this.ticks - this.ticks % 3600) / 3600;
            hoursText = this.formatNumber(hours) + ':'
            remainingSeconds = this.ticks - hours * 3600;
        } 
        if( !hoursText && this.days > 0 ) {
            hoursText = '00:'
        }
        let seconds = remainingSeconds % 60;
        if( (remainingSeconds / 60) >= 1) {
            minutes = (remainingSeconds - seconds) / 60;
        }    
        return hoursText +
            this.formatNumber(minutes) + ':' + 
            this.formatNumber(seconds);
    }

    public getWholeDays(): string  { 
        return this.days.toString();
    }

    protected formatNumber(number: number) : string { 
        console.log(number);
        if (number < 10) { 
            return '0'+number; 
        }
        return number.toString();
    }

    private convertTicksToDays(seconds: number) {
        let days = seconds / this.DAY;
        this.ticks = seconds;
        if (days >= 1) {
            this.ticks = seconds % this.DAY;
            this.days = ( seconds - this.ticks ) / this.DAY;
        }

    }
}
