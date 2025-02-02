export const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);
  
    if (secondsAgo < 60) {
      return "Just now";
    }
    
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} min ago`;
    }
  
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
      return `${hoursAgo} hr${hoursAgo > 1 ? "s" : ""} ago`;
    }
  
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) {
      return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
    }
  
    const weeksAgo = Math.floor(daysAgo / 7);
    if (weeksAgo < 4) {
      return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
    }
  
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) {
      return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
    }
  
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  };
  