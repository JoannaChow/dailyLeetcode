type TTimestamp = {
    timestamp: number;
    value: string;
};
class TimeMap {
    value_store: Map<string, TTimestamp[]>; // {key: {timestamp: value}};\
    constructor() {
        this.value_store = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.value_store.has(key)) {
            this.value_store.set(key, [{ timestamp, value }]);
        } else {
            const timestamps = this.value_store.get(key) as TTimestamp[];
            timestamps.push({ timestamp, value });
        }
    }

    get(key: string, timestamp: number): string {
        if (this.value_store.has(key)) {
            const timestamps = this.value_store.get(key) as TTimestamp[];

            if (timestamps[0].timestamp > timestamp) return "";

            let left = 0,
                right = timestamps.length - 1;
            while (left < right) {
                const mid = Math.ceil((left + right) / 2);
                if (timestamps[mid].timestamp > timestamp) {
                    right = mid - 1;
                } else {
                    left = mid;
                }
            }
            return timestamps[left].value;
        }

        return "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
