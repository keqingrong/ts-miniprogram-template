// logs.ts
import { formatTime } from '../../utils/util';

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatTime(new Date(log));
      })
    });
  }
});
