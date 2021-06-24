let getSleepHours = day => {
    if(day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
      }else if (day === 'wednesday') {
        return 7;
      } else if (day === 'thursday'){
        return 5;
      }else if (day === 'friday') {
        return 8;
      } else if (day ==='saturday') {
        return 10;
      } else if (day === 'sunday') {
        return 8;
      }
  };
  
  //console.log(getSleepHours('tuesday'));
  
  const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday')+
  getSleepHours('saturday') +
  getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = 
    getActualSleepHours();
    const idealSleepHours =
    getIdealSleepHours();
  };
  
  if(getActualSleepHours === getIdealSleepHours) {
    console.log('youve got the perfect amount of sleep');
  } else if (getActualSleepHours > getIdealSleepHours) {
    console.log("You've got more sleep than needed");
  } else if (getActualSleepHours < getIdealSleepHours) {
    console.log("you should get some rest");
  } else {
    console.log("Error! something went wrong check your code.");
  };
  
  if(getActualSleepHours < getIdealSleepHours) {
    console.log('you got ' + (getIdealSleepHours - getActualSleepHours) + ' hour(s) less slepp than you needed this week. Get some rest.');
  };
   
   calculateSleepDebt();