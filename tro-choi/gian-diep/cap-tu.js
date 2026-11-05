// Cặp từ gần giống của trò Ai là gián điệp 谁是卧底. BẢN NHÁP, chờ cô duyệt.
// Mỗi dòng: từ A|nghĩa|từ B|nghĩa. Pinyin và cấp lấy từ hsk-words.js; từ không có trong đề cương HSK 1–6 thì cặp đó tự bị bỏ.
// Cấp của cặp = cấp cao hơn trong 2 từ. Thêm cặp thì thêm dòng ở cuối, đổi thứ tự giữa các dòng làm phòng đang chơi bị lệch.
window.GD_CAP=`苹果|quả táo|香蕉|quả chuối
苹果|quả táo|西瓜|dưa hấu
猫|con mèo|狗|con chó
咖啡|cà phê|茶|trà
牛奶|sữa bò|水|nước
米饭|cơm|面条|mì sợi
老师|giáo viên|学生|học sinh
医生|bác sĩ|老师|giáo viên
医院|bệnh viện|学校|trường học
飞机|máy bay|火车|tàu hoả
火车|tàu hoả|汽车|ô tô
公共汽车|xe buýt|出租车|taxi
手机|điện thoại di động|电脑|máy tính
电影|phim|电视|ti vi
爸爸|bố|妈妈|mẹ
哥哥|anh trai|弟弟|em trai
姐姐|chị gái|妹妹|em gái
早上|buổi sáng|晚上|buổi tối
今天|hôm nay|明天|ngày mai
夏天|mùa hè|冬天|mùa đông
跑步|chạy bộ|游泳|bơi
唱歌|hát|跳舞|nhảy múa
书|sách|报纸|báo
商店|cửa hàng|超市|siêu thị
饭馆|quán ăn|食堂|nhà ăn
椅子|cái ghế|桌子|cái bàn
衣服|quần áo|裤子|quần
鞋|giày|帽子|mũ
眼睛|mắt|耳朵|tai
鸡蛋|trứng gà|鸡肉|thịt gà
羊肉|thịt cừu|牛肉|thịt bò
啤酒|bia|果汁|nước hoa quả
自行车|xe đạp|摩托车|xe máy
雨|mưa|雪|tuyết
太阳|mặt trời|月亮|mặt trăng
北京|Bắc Kinh|上海|Thượng Hải
汉语|tiếng Hán|英语|tiếng Anh
朋友|bạn bè|同学|bạn học
教室|phòng học|图书馆|thư viện
公园|công viên|动物园|sở thú
银行|ngân hàng|邮局|bưu điện
机场|sân bay|火车站|ga tàu
宾馆|khách sạn|医院|bệnh viện
爷爷|ông nội|奶奶|bà nội
足球|bóng đá|篮球|bóng rổ
蛋糕|bánh ngọt|面包|bánh mì
冰箱|tủ lạnh|空调|điều hoà
地铁|tàu điện ngầm|公共汽车|xe buýt
照片|ảnh|地图|bản đồ
手表|đồng hồ đeo tay|眼镜|kính mắt
铅笔|bút chì|笔记本|quyển vở
旅游|du lịch|出差|đi công tác
春天|mùa xuân|秋天|mùa thu
词典|từ điển|杂志|tạp chí
钱包|ví tiền|行李箱|va li
护照|hộ chiếu|身份证|chứng minh thư
经理|giám đốc|秘书|thư ký
律师|luật sư|记者|nhà báo
演员|diễn viên|歌手|ca sĩ
警察|cảnh sát|司机|tài xế
饺子|sủi cảo|包子|bánh bao
葡萄|nho|草莓|dâu tây
熊猫|gấu trúc|老虎|con hổ
牙膏|kem đánh răng|香皂|xà phòng
窗户|cửa sổ|门|cửa ra vào
沙发|ghế sô pha|床|cái giường
勺子|cái thìa|筷子|đôi đũa
镜子|cái gương|窗户|cửa sổ
散步|đi dạo|爬山|leo núi
考试|thi|作业|bài tập
小说|tiểu thuyết|诗|thơ
钢琴|đàn piano|吉他|đàn ghi-ta
飞机票|vé máy bay|火车票|vé tàu
房子|căn nhà|公寓|chung cư
医生|bác sĩ|护士|y tá
`.trim().split('\n').map(l=>l.split('|'));
