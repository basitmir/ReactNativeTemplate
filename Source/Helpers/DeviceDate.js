// A wrapper for MomentJs and Js Date/Time
import moment from 'moment';

export default DeviceDate = {
  format: (date = moment(), format = 'YYYY-MM-DD HH:mm A') => {
    return moment(date).format(format);
  },
  generateSlots: (date = moment()) => {
    const isToday = moment(date).isSame(moment(), "date")

    const slotInterval = 15 // minutes
    let openTime = moment("00:15", "HH:mm")
    const closeTime = moment("23:59", "HH:mm") // till 23:45

    if (isToday) {
      const hour = moment(date).get("hours")
      const minute = moment(date).get("minutes")
      if (minute > 45) {
        openTime = moment(`${hour + 1}:00`, "HH:mm")
      } else {
        const rem = minute % 15
        openTime = moment(`${hour}:${minute + (slotInterval - rem)}`, "HH:mm")
      }
    }

    const allSlots = [];
    while (openTime < closeTime) {
      allSlots.push({
        value: openTime.format("HH:mm"),
        label: openTime.format("HH:mm")
      });
      openTime.add(slotInterval, 'minutes');
    }
    return allSlots
  },
  getIsoDate: (date) => {
    return moment(date).toISOString()
  },
  getUtcDate: (date) => {
    return moment.utc(date);
  },
  getCurrentMoment: () => {
    return moment()
  },
  getDateMoment: (date) => {
    return moment(date)
  }
}