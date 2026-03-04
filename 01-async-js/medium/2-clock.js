// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function pad(n) {
    return String(n).padStart(2, "0");
}

function printTime() {
    const now = new Date();
    const h24 = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const h12 = h24 % 12 || 12;
    const ampm = h24 < 12 ? "AM" : "PM";

    console.log(`${pad(h24)}:${pad(m)}:${pad(s)}`);
    console.log(`${pad(h12)}:${pad(m)}:${pad(s)} ${ampm}`);
    console.log("---");
}

setInterval(printTime, 1000);
