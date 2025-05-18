// ✅ Type Definitions
export type DateFormat = {
  yyyy: string;
  mm: string;
  dd: string;
};

export type Greeting = {
  hour: number;
  greet: string;
};

export type DateGreeting = DateFormat & Greeting;

// ✅ Memoized function for formatting the date and greeting
export function getDateGreeting(): DateGreeting {
  const date = new Date();

  const year = date.getFullYear().toString();
  const monthShort = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();

  const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const wrapDay = `${day}${getOrdinalSuffix(day)}`;

  // Get Greeting Based on the Time of Day
  const hour = date.getHours();
  let greet = "Good Night!";
  if (hour >= 5 && hour < 12) greet = "Sunrise!";
  else if (hour >= 12 && hour < 17) greet = "Noon!";
  else if (hour >= 17 && hour < 21) greet = "Eve!";

  return {
    yyyy: year,
    mm: monthShort,
    dd: wrapDay,
    hour,
    greet,
  };
}
// console.log(getDateGreeting());
