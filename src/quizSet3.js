export const quizSet3 = [
  {
    question: "Java Collection Framework là gì?",
    options: [
      "Một kiến trúc để lưu trữ và thao tác với nhóm các đối tượng",
      "Một thư viện để kết nối với cơ sở dữ liệu",
      "Một công cụ để tạo giao diện người dùng",
      "Một framework để phát triển ứng dụng web"
    ],
    answer: 0,
    explanation: "Java Collection Framework là một kiến trúc để lưu trữ và thao tác với nhóm các đối tượng. Nó cung cấp các interface (như List, Set, Queue, Map) và các lớp cài đặt (như ArrayList, LinkedList, HashSet, HashMap) để xử lý các tập hợp đối tượng. Collection Framework giúp đơn giản hóa việc thao tác với dữ liệu và tăng hiệu suất chương trình."
  },
  {
    question: "Interface nào là gốc của hầu hết các collection trong Java?",
    options: ["Collection", "List", "Set", "Map"],
    answer: 0,
    explanation: "Interface Collection là gốc của hầu hết các collection trong Java. Nó nằm ở đỉnh của hệ thống phân cấp collection và định nghĩa các phương thức cơ bản như add(), remove(), contains(), size(), iterator(), v.v. Các interface khác như List, Set, Queue đều kế thừa từ Collection. Lưu ý rằng Map không kế thừa từ Collection vì cấu trúc dữ liệu của nó khác biệt (lưu trữ theo cặp key-value)."
  },
  {
    question: "Đâu KHÔNG phải là một interface trong Java Collections Framework?",
    options: ["Array", "List", "Set", "Queue"],
    answer: 0,
    explanation: "Array không phải là một interface trong Java Collections Framework. Trong Java, mảng (array) là một cấu trúc dữ liệu cơ bản được tích hợp sẵn trong ngôn ngữ, không phải một phần của Collection Framework. List, Set và Queue đều là các interface thuộc Java Collections Framework, được định nghĩa trong package java.util."
  },
  {
    question: "Đặc điểm của ArrayList trong Java là gì?",
    options: [
      "Dựa trên mảng động, có thể thay đổi kích thước",
      "Dựa trên danh sách liên kết đôi",
      "Không cho phép phần tử trùng lặp",
      "Các phần tử được sắp xếp theo thứ tự tự nhiên"
    ],
    answer: 0,
    explanation: "ArrayList trong Java được triển khai dựa trên mảng động (dynamic array) có thể thay đổi kích thước. Khi mảng đạt đến giới hạn dung lượng, một mảng mới với kích thước lớn hơn sẽ được tạo ra và các phần tử sẽ được sao chép sang. ArrayList cho phép truy cập ngẫu nhiên nhanh chóng (O(1)) nhưng chèn và xóa phần tử có thể chậm hơn với độ phức tạp O(n) do cần dịch chuyển các phần tử."
  },
  {
    question: "LinkedList trong Java được triển khai dựa trên cấu trúc dữ liệu nào?",
    options: [
      "Danh sách liên kết đôi",
      "Mảng động",
      "Cây nhị phân",
      "Bảng băm"
    ],
    answer: 0,
    explanation: "LinkedList trong Java được triển khai dựa trên cấu trúc dữ liệu danh sách liên kết đôi (doubly linked list). Mỗi phần tử trong LinkedList là một node chứa 3 thành phần: dữ liệu, con trỏ đến node trước đó và con trỏ đến node tiếp theo. LinkedList có ưu điểm khi thực hiện các thao tác chèn/xóa phần tử (O(1) nếu đã có vị trí) nhưng truy cập ngẫu nhiên chậm hơn (O(n)) so với ArrayList."
  },
  {
    question: "Interface nào trong Java Collections không cho phép các phần tử trùng lặp?",
    options: ["Set", "List", "Queue", "Deque"],
    answer: 0
  },
  {
    question: "Phương thức nào dùng để thêm phần tử vào ArrayList trong Java?",
    options: ["add()", "push()", "insert()", "append()"],
    answer: 0
  },
  {
    question: "HashSet trong Java dựa trên cấu trúc dữ liệu nào?",
    options: ["HashMap", "TreeMap", "LinkedList", "ArrayList"],
    answer: 0
  },
  {
    question: "Đặc điểm của TreeSet trong Java là gì?",
    options: [
      "Các phần tử được sắp xếp theo thứ tự tự nhiên",
      "Cho phép phần tử trùng lặp",
      "Dựa trên cấu trúc dữ liệu LinkedList",
      "Nhanh hơn HashSet trong hầu hết các thao tác"
    ],
    answer: 0
  },
  {
    question: "Interface Map trong Java Collection Framework lưu trữ dữ liệu dưới dạng gì?",
    options: [
      "Cặp key-value",
      "Danh sách các phần tử",
      "Các phần tử không trùng lặp",
      "Các phần tử theo thứ tự chèn vào"
    ],
    answer: 0
  },
  {
    question: "Sự khác biệt giữa HashMap và Hashtable trong Java là gì?",
    options: [
      "HashMap không đồng bộ hóa và cho phép null, Hashtable đồng bộ hóa và không cho phép null",
      "HashMap đồng bộ hóa, Hashtable không đồng bộ hóa",
      "HashMap không cho phép null, Hashtable cho phép null",
      "HashMap chỉ lưu trữ chuỗi, Hashtable lưu trữ mọi kiểu dữ liệu"
    ],
    answer: 0
  },
  {
    question: "LinkedHashMap trong Java có đặc điểm gì?",
    options: [
      "Duy trì thứ tự chèn của các phần tử",
      "Sắp xếp các phần tử theo key",
      "Không cho phép null key",
      "Đồng bộ hóa tất cả các thao tác"
    ],
    answer: 0
  },
  {
    question: "Phương thức nào dùng để sắp xếp một List trong Java?",
    options: [
      "Collections.sort()",
      "List.sort()",
      "Arrays.sort()",
      "ArrayList.sortElements()"
    ],
    answer: 0
  },
  {
    question: "Interface Comparable trong Java dùng để làm gì?",
    options: [
      "Định nghĩa thứ tự tự nhiên của một lớp",
      "So sánh hai đối tượng khác lớp",
      "Tìm kiếm trong collection",
      "Đồng bộ hóa các thao tác trên collection"
    ],
    answer: 0
  },
  {
    question: "Iterator trong Java Collection Framework dùng để làm gì?",
    options: [
      "Duyệt qua các phần tử trong collection",
      "Sắp xếp các phần tử trong collection",
      "Thêm phần tử vào collection",
      "Tìm kiếm phần tử trong collection"
    ],
    answer: 0
  },
  {
    question: "Ngoại lệ (exception) trong Java là gì?",
    options: [
      "Một tình huống bất thường xảy ra trong quá trình thực thi chương trình",
      "Một lỗi biên dịch",
      "Một cảnh báo từ compiler",
      "Một cơ chế để dừng chương trình"
    ],
    answer: 0
  },
  {
    question: "Trong Java, các ngoại lệ được chia thành mấy loại chính?",
    options: [
      "Checked Exception và Unchecked Exception",
      "Runtime Exception và Compile Exception",
      "Error Exception và Warning Exception",
      "Minor Exception và Major Exception"
    ],
    answer: 0
  },
  {
    question: "Unchecked Exception trong Java là gì?",
    options: [
      "Exception xảy ra lúc runtime và không bắt buộc phải xử lý",
      "Exception được kiểm tra lúc biên dịch",
      "Exception xảy ra do lỗi cấu hình",
      "Exception do người dùng định nghĩa"
    ],
    answer: 0
  },
  {
    question: "Từ khóa nào trong Java dùng để ném một ngoại lệ?",
    options: ["throw", "throws", "catch", "try"],
    answer: 0
  },
  {
    question: "Từ khóa throws trong Java dùng để làm gì?",
    options: [
      "Khai báo ngoại lệ mà phương thức có thể ném ra",
      "Ném một ngoại lệ",
      "Bắt một ngoại lệ",
      "Tạo một ngoại lệ mới"
    ],
    answer: 0
  },
  {
    question: "Trong Java, try-with-resources được sử dụng để làm gì?",
    options: [
      "Tự động đóng các tài nguyên được khai báo trong try",
      "Tạo một khối try chỉ với một số tài nguyên giới hạn",
      "Kết hợp nhiều khối try lại với nhau",
      "Giới hạn bộ nhớ sử dụng trong khối try"
    ],
    answer: 0
  },
  {
    question: "Khối lệnh finally trong try-catch-finally được thực thi khi nào?",
    options: [
      "Luôn được thực thi, dù có ngoại lệ hay không",
      "Chỉ khi không có ngoại lệ",
      "Chỉ khi có ngoại lệ",
      "Chỉ khi ngoại lệ được xử lý trong catch"
    ],
    answer: 0
  },
  {
    question: "Lớp nào là lớp cha của tất cả các ngoại lệ trong Java?",
    options: ["Throwable", "Exception", "Error", "RuntimeException"],
    answer: 0
  },
  {
    question: "Sự khác biệt giữa Error và Exception trong Java là gì?",
    options: [
      "Error thường là không thể khôi phục, Exception có thể được xử lý",
      "Error xảy ra lúc compile-time, Exception xảy ra lúc runtime",
      "Error do người dùng định nghĩa, Exception có sẵn trong Java",
      "Error chỉ xảy ra trong các ứng dụng desktop, Exception xảy ra trong mọi loại ứng dụng"
    ],
    answer: 0
  },
  {
    question: "Phương thức nào được sử dụng để đọc một file trong Java?",
    options: [
      "FileReader, BufferedReader",
      "StringReader, TextReader",
      "Scanner, ScannerReader",
      "InputFile, ReadFile"
    ],
    answer: 0
  },
  {
    question: "Lớp nào trong Java dùng để ghi dữ liệu vào file?",
    options: [
      "FileWriter, BufferedWriter",
      "StringWriter, TextWriter",
      "PrintStream, WriteStream",
      "OutputFile, WriteFile"
    ],
    answer: 0
  },
  {
    question: "Để đọc dữ liệu từ console trong Java, lớp nào thường được sử dụng?",
    options: ["Scanner", "Console", "BufferedReader", "InputStreamReader"],
    answer: 0
  },
  {
    question: "Trong Java I/O, lớp InputStream và OutputStream là gì?",
    options: [
      "Lớp trừu tượng để đọc và ghi byte",
      "Lớp cụ thể để đọc và ghi ký tự",
      "Interface để đọc và ghi dữ liệu",
      "Các lớp để xử lý ngoại lệ I/O"
    ],
    answer: 0
  },
  {
    question: "NIO (New I/O) trong Java khác với I/O truyền thống như thế nào?",
    options: [
      "NIO cung cấp xử lý I/O hướng buffer và non-blocking",
      "NIO chỉ làm việc với file text",
      "NIO không hỗ trợ xử lý ngoại lệ",
      "NIO chỉ có thể đọc dữ liệu, không thể ghi"
    ],
    answer: 0
  },
  {
    question: "Trong Java, cách nào để tạo một thread mới?",
    options: [
      "Kế thừa lớp Thread hoặc implement interface Runnable",
      "Sử dụng phương thức static Thread.create()",
      "Kế thừa lớp Process",
      "Implement interface Threadable"
    ],
    answer: 0
  },
  {
    question: "Phương thức nào được gọi khi một thread bắt đầu chạy?",
    options: ["run()", "start()", "execute()", "process()"],
    answer: 0
  },
  {
    question: "Trong Java, thread có mấy trạng thái chính?",
    options: ["5 (New, Runnable, Blocked, Waiting, Terminated)", "3", "7", "4"],
    answer: 0
  },
  {
    question: "Phương thức sleep() trong Thread dùng để làm gì?",
    options: [
      "Tạm dừng thực thi thread trong một khoảng thời gian",
      "Dừng hẳn thread",
      "Chuyển thread sang trạng thái chờ",
      "Giải phóng tài nguyên của thread"
    ],
    answer: 0
  },
  {
    question: "Lớp nào trong java.util.concurrent dùng để tạo thread pool?",
    options: ["ExecutorService", "ThreadManager", "ThreadPool", "ConcurrentExecutor"],
    answer: 0
  },
  {
    question: "Khái niệm deadlock trong multi-threading là gì?",
    options: [
      "Tình trạng hai hay nhiều thread chờ đợi lẫn nhau vô hạn định",
      "Tình trạng một thread chạy quá chậm",
      "Tình trạng một thread tiêu thụ quá nhiều CPU",
      "Tình trạng thread bị lỗi và dừng thực thi"
    ],
    answer: 0
  },
  {
    question: "Từ khóa synchronized trong Java dùng để làm gì?",
    options: [
      "Đảm bảo chỉ một thread có thể truy cập vào phần code được đồng bộ hóa tại một thời điểm",
      "Kết hợp nhiều thread thành một thread duy nhất",
      "Giao tiếp giữa các thread",
      "Tăng tốc độ thực thi của thread"
    ],
    answer: 0
  },
  {
    question: "Trong Java 8, Cấu trúc dữ liệu nào được thêm vào để hỗ trợ lập trình đồng thời?",
    options: ["ConcurrentHashMap", "SynchronizedList", "ParallelArray", "AtomicArray"],
    answer: 0
  },
  {
    question: "Interface Callable trong Java khác với Runnable như thế nào?",
    options: [
      "Callable có thể trả về giá trị và ném ngoại lệ, Runnable thì không",
      "Callable chỉ làm việc với ExecutorService, Runnable làm việc với Thread",
      "Callable được thêm vào Java 8, Runnable có từ phiên bản đầu tiên",
      "Callable chạy nhanh hơn Runnable"
    ],
    answer: 0
  },
  {
    question: "Phương thức join() trong Thread dùng để làm gì?",
    options: [
      "Đợi thread đó hoàn thành trước khi tiếp tục",
      "Kết hợp hai thread lại với nhau",
      "Thêm một thread vào thread pool",
      "Dừng thread hiện tại"
    ],
    answer: 0
  },
  {
    question: "Lớp nào dùng để đọc và ghi dữ liệu nhị phân trong Java?",
    options: [
      "DataInputStream và DataOutputStream",
      "BinaryReader và BinaryWriter",
      "ByteReader và ByteWriter",
      "ObjectReader và ObjectWriter"
    ],
    answer: 0
  },
  {
    question: "Trong Java, Serialization dùng để làm gì?",
    options: [
      "Chuyển đổi đối tượng thành dạng byte để có thể lưu trữ hoặc truyền qua mạng",
      "Sắp xếp các đối tượng theo thứ tự",
      "Chuyển đổi đối tượng thành XML",
      "Đánh số các đối tượng trong collection"
    ],
    answer: 0
  },
  {
    question: "Các lớp nào dùng để serialization trong Java?",
    options: [
      "ObjectInputStream và ObjectOutputStream",
      "SerialReader và SerialWriter",
      "FileSerializer và FileDeserializer",
      "ByteConverter và ObjectConverter"
    ],
    answer: 0
  },
  {
    question: "Lớp nào trong Java dùng để xử lý file ZIP?",
    options: [
      "ZipInputStream và ZipOutputStream",
      "CompressedFile và DecompressedFile",
      "ZipReader và ZipWriter",
      "ArchiveStream và UnarchiveStream"
    ],
    answer: 0
  },
  {
    question: "RandomAccessFile trong Java cho phép làm gì?",
    options: [
      "Đọc và ghi file ở bất kỳ vị trí nào",
      "Tạo file với kích thước ngẫu nhiên",
      "Mã hóa nội dung file",
      "Tạo file tạm thời"
    ],
    answer: 0
  },
  {
    question: "Trong Java, Path Interface được sử dụng để làm gì?",
    options: [
      "Biểu diễn đường dẫn file trong hệ thống file",
      "Biểu diễn URL trên Internet",
      "Biểu diễn đường dẫn trong cơ sở dữ liệu",
      "Biểu diễn đường dẫn trong XML"
    ],
    answer: 0
  },
  {
    question: "Trong Java, lớp java.util.concurrent.atomic.AtomicInteger được sử dụng để làm gì?",
    options: [
      "Cung cấp các thao tác atomic trên biến integer",
      "Tạo số nguyên ngẫu nhiên",
      "Tạo số nguyên trong một khoảng cố định",
      "Tăng hiệu suất tính toán số nguyên"
    ],
    answer: 0
  },
  {
    question: "Để quản lý bộ nhớ trong Java, lớp nào có thể được sử dụng?",
    options: [
      "WeakReference, SoftReference, PhantomReference",
      "MemoryManager, MemoryController",
      "GarbageCollector, MemoryPool",
      "MemoryReference, StrongReference"
    ],
    answer: 0
  },
  {
    question: "Đâu là lớp abstract trong Java Collections Framework?",
    options: [
      "AbstractList, AbstractSet, AbstractMap",
      "VirtualList, VirtualSet, VirtualMap",
      "BasicList, BasicSet, BasicMap",
      "GenericList, GenericSet, GenericMap"
    ],
    answer: 0
  },
  {
    question: "Trong Java, CountDownLatch được sử dụng để làm gì?",
    options: [
      "Cho phép một thread chờ cho đến khi tất cả các thread khác hoàn thành",
      "Đếm số lần một thread được thực thi",
      "Giới hạn số lượng thread đồng thời",
      "Đếm số lần một phương thức được gọi"
    ],
    answer: 0
  },
  {
    question: "Trong Java, CyclicBarrier được sử dụng để làm gì?",
    options: [
      "Cho phép một nhóm thread đợi đến khi tất cả đạt đến một điểm chung",
      "Ngăn chặn deadlock trong ứng dụng",
      "Tạo vòng lặp vô hạn của các thread",
      "Kiểm tra hiệu suất của thread"
    ],
    answer: 0
  },
  {
    question: "Đặc điểm của CopyOnWriteArrayList trong Java là gì?",
    options: [
      "Tạo bản sao mới mỗi khi có thay đổi, đảm bảo thread-safe",
      "Chỉ cho phép đọc, không cho phép ghi",
      "Tự động sao chép dữ liệu sang ArrayList khác",
      "Giới hạn số lượng phần tử có thể thêm vào"
    ],
    answer: 0
  },
  {
    question: "Collection nào trong Java lưu trữ các phần tử theo thứ tự chèn và cho phép phần tử trùng lặp?",
    options: ["ArrayList", "HashSet", "TreeSet", "HashMap"],
    answer: 0,
    explanation: "ArrayList là một Collection trong Java lưu trữ các phần tử theo thứ tự chèn và cho phép phần tử trùng lặp. Nó là một triển khai của List interface, sử dụng mảng động bên trong để lưu trữ phần tử, cho phép truy cập ngẫu nhiên nhanh chóng."
  },
  {
    question: "Collection nào trong Java không cho phép phần tử trùng lặp và không đảm bảo thứ tự?",
    options: ["HashSet", "ArrayList", "LinkedList", "Vector"],
    answer: 0,
    explanation: "HashSet là một Collection trong Java không cho phép phần tử trùng lặp và không đảm bảo thứ tự của các phần tử. Nó triển khai Set interface và sử dụng bảng băm để lưu trữ, cung cấp thời gian truy cập không đổi O(1) cho các hoạt động cơ bản."
  },
  {
    question: "Interface nào là cơ sở cho tất cả các collection trong Java?",
    options: ["Collection", "List", "Set", "Map"],
    answer: 0,
    explanation: "Collection là interface cơ sở cho hầu hết các collection trong Java. Nó khai báo các phương thức cơ bản như add(), remove(), contains(), size(), isEmpty(), v.v. mà tất cả các collection cụ thể đều triển khai. Map là interface riêng biệt không kế thừa từ Collection."
  },
  {
    question: "Collection nào trong Java lưu trữ các cặp key-value?",
    options: ["HashMap", "ArrayList", "HashSet", "Stack"],
    answer: 0,
    explanation: "HashMap là một collection trong Java lưu trữ các cặp key-value. Nó triển khai Map interface và sử dụng bảng băm để lưu trữ, cho phép truy xuất giá trị dựa trên key với thời gian hằng số. Mỗi key chỉ có thể xuất hiện một lần trong HashMap."
  },
  {
    question: "Collection nào trong Java cung cấp các thao tác LIFO (Last-In-First-Out)?",
    options: ["Stack", "Queue", "Deque", "PriorityQueue"],
    answer: 0,
    explanation: "Stack là một collection trong Java cung cấp các thao tác LIFO (Last-In-First-Out). Nó mở rộng từ Vector và cung cấp các phương thức như push(), pop(), peek() để thêm, loại bỏ và kiểm tra phần tử ở đỉnh của stack."
  },
  {
    question: "Collection nào trong Java lưu trữ các phần tử theo thứ tự đã sắp xếp?",
    options: ["TreeSet", "HashSet", "LinkedHashSet", "ArrayList"],
    answer: 0,
    explanation: "TreeSet là một collection trong Java lưu trữ các phần tử theo thứ tự đã sắp xếp. Nó triển khai NavigableSet interface và sử dụng cây đỏ-đen để lưu trữ. TreeSet không cho phép phần tử trùng lặp và các phần tử được sắp xếp theo thứ tự tự nhiên hoặc theo Comparator được cung cấp."
  },
  {
    question: "Khối nào bắt các ngoại lệ trong Java?",
    options: ["catch", "try", "finally", "throw"],
    answer: 0,
    explanation: "Khối catch bắt các ngoại lệ trong Java. Nó đi sau khối try và chỉ được thực thi khi một ngoại lệ xảy ra trong khối try. Có thể có nhiều khối catch để xử lý các loại ngoại lệ khác nhau."
  },
  {
    question: "Lớp nào là lớp cha của tất cả các ngoại lệ trong Java?",
    options: ["Throwable", "Exception", "Error", "RuntimeException"],
    answer: 0,
    explanation: "Throwable là lớp cha của tất cả các ngoại lệ và lỗi trong Java. Nó có hai lớp con trực tiếp: Exception (cho các tình huống có thể phục hồi) và Error (cho các tình huống nghiêm trọng, thường không thể phục hồi)."
  },
  {
    question: "Loại ngoại lệ nào không yêu cầu bắt hoặc khai báo trong Java?",
    options: ["RuntimeException", "IOException", "SQLException", "ClassNotFoundException"],
    answer: 0,
    explanation: "RuntimeException và các lớp con của nó là unchecked exceptions - không yêu cầu bắt hoặc khai báo trong Java. Chúng thường đại diện cho các lỗi lập trình như NullPointerException, ArrayIndexOutOfBoundsException, và có thể tránh được bằng cách viết code đúng."
  },
  {
    question: "Từ khóa nào dùng để ném ngoại lệ trong Java?",
    options: ["throw", "throws", "try", "catch"],
    answer: 0,
    explanation: "Từ khóa throw được sử dụng để ném một ngoại lệ trong Java. Cú pháp là: throw new ExceptionType(). Ví dụ: throw new IllegalArgumentException(\"Invalid parameter\");"
  },
  {
    question: "Lớp nào được sử dụng để đọc dữ liệu từ file trong Java?",
    options: ["FileReader", "FileWriter", "PrintWriter", "BufferedWriter"],
    answer: 0,
    explanation: "FileReader là một lớp trong Java được sử dụng để đọc dữ liệu từ file. Nó là một lớp character stream đọc file văn bản. Thường được kết hợp với BufferedReader để cải thiện hiệu suất: BufferedReader reader = new BufferedReader(new FileReader(file));"
  },
  {
    question: "Collection nào trong Java đảm bảo thứ tự chèn và cung cấp các thao tác hiệu quả ở cả hai đầu?",
    options: ["LinkedList", "ArrayList", "Vector", "HashSet"],
    answer: 0,
    explanation: "LinkedList trong Java đảm bảo thứ tự chèn và cung cấp các thao tác hiệu quả ở cả hai đầu. Nó triển khai cả List và Deque interface, sử dụng danh sách liên kết đôi để lưu trữ phần tử. LinkedList hiệu quả khi thêm/xóa phần tử ở đầu/cuối hoặc khi duyệt tuần tự."
  },
  {
    question: "Lớp nào trong Java IOException được ném khi không tìm thấy file?",
    options: ["FileNotFoundException", "EOFException", "InterruptedIOException", "CharConversionException"],
    answer: 0,
    explanation: "FileNotFoundException là một lớp con của IOException trong Java được ném khi không tìm thấy file hoặc không thể mở file. Nó thường xảy ra khi cố gắng mở một file không tồn tại hoặc không có quyền truy cập."
  },
  {
    question: "Interface nào trong Java xác định phương thức để so sánh các đối tượng theo thứ tự?",
    options: ["Comparable", "Comparator", "Cloneable", "Serializable"],
    answer: 0,
    explanation: "Interface Comparable trong Java xác định phương thức compareTo() để so sánh các đối tượng theo thứ tự tự nhiên. Các lớp triển khai Comparable có thể được sắp xếp tự động bằng các phương thức như Collections.sort() hoặc Arrays.sort() mà không cần bộ so sánh bổ sung."
  },
  {
    question: "Lớp nào được sử dụng để tạo luồng trong Java?",
    options: ["Thread", "Runnable", "ThreadGroup", "Executor"],
    answer: 0,
    explanation: "Lớp Thread được sử dụng để tạo luồng trong Java. Có hai cách chính để tạo luồng: kế thừa lớp Thread và ghi đè phương thức run(), hoặc triển khai interface Runnable và truyền nó cho constructor của Thread."
  },
  {
    question: "Phương thức nào được sử dụng để bắt đầu một luồng trong Java?",
    options: ["start()", "run()", "execute()", "begin()"],
    answer: 0,
    explanation: "Phương thức start() được sử dụng để bắt đầu một luồng trong Java. Khi gọi start(), JVM sẽ cấp phát tài nguyên cần thiết và gọi phương thức run() của luồng. Nếu gọi run() trực tiếp, mã sẽ thực thi trong luồng hiện tại, không phải trong luồng mới."
  },
  {
    question: "Lớp nào trong Java cung cấp các phương thức để đọc byte từ stream?",
    options: ["InputStream", "OutputStream", "Reader", "Writer"],
    answer: 0,
    explanation: "InputStream là một lớp trừu tượng trong Java cung cấp các phương thức để đọc byte từ stream. Nó là lớp cơ sở cho tất cả các lớp input stream như FileInputStream, ByteArrayInputStream, ObjectInputStream, v.v."
  },
  {
    question: "Từ khóa nào trong Java được sử dụng để đồng bộ hóa phương thức?",
    options: ["synchronized", "volatile", "transient", "atomic"],
    answer: 0,
    explanation: "Từ khóa synchronized trong Java được sử dụng để đồng bộ hóa phương thức hoặc khối code, đảm bảo rằng chỉ một luồng có thể thực thi phương thức hoặc khối đó tại một thời điểm. Điều này giúp ngăn chặn các vấn đề về đồng thời trong môi trường đa luồng."
  },
  {
    question: "Collection nào trong Java duy trì thứ tự của cặp key-value theo thứ tự chèn?",
    options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"],
    answer: 0,
    explanation: "LinkedHashMap là một collection trong Java duy trì thứ tự của cặp key-value theo thứ tự chèn. Nó kết hợp bảng băm với danh sách liên kết, cung cấp tốc độ truy cập nhanh của HashMap cùng với khả năng duy trì thứ tự chèn."
  },
  {
    question: "Lớp nào trong Java được sử dụng để ghi dữ liệu vào file?",
    options: ["FileWriter", "FileReader", "BufferedReader", "InputStreamReader"],
    answer: 0,
    explanation: "FileWriter là một lớp trong Java được sử dụng để ghi dữ liệu văn bản vào file. Nó là một character stream, thường được kết hợp với BufferedWriter để cải thiện hiệu suất: BufferedWriter writer = new BufferedWriter(new FileWriter(file));"
  },
  {
    question: "Khối nào trong cấu trúc try-catch luôn được thực thi, bất kể có ngoại lệ hay không?",
    options: ["finally", "catch", "try", "throw"],
    answer: 0,
    explanation: "Khối finally trong cấu trúc try-catch luôn được thực thi, bất kể có ngoại lệ xảy ra hay không, trừ khi JVM thoát (ví dụ: System.exit()) hoặc luồng bị ngắt. Khối finally thường được sử dụng để giải phóng tài nguyên như đóng file hoặc kết nối."
  },
  {
    question: "Collection nào trong Java tự động sắp xếp các cặp key-value theo key?",
    options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"],
    answer: 0,
    explanation: "TreeMap là một collection trong Java tự động sắp xếp các cặp key-value theo key. Nó triển khai NavigableMap interface và sử dụng cây đỏ-đen để lưu trữ, đảm bảo các key được sắp xếp theo thứ tự tự nhiên hoặc theo Comparator được cung cấp."
  },
  {
    question: "Interface nào trong Java cho phép đồng bộ hóa giữa các luồng?",
    options: ["Wait and Notify", "Sleep and Yield", "Run and Start", "Join and Interrupt"],
    answer: 0,
    explanation: "Wait and Notify (wait(), notify(), notifyAll()) là các phương thức từ class Object cho phép đồng bộ hóa giữa các luồng trong Java. wait() khiến luồng hiện tại chờ đợi, trong khi notify()/notifyAll() đánh thức một/tất cả các luồng đang chờ trên đối tượng. Các phương thức này phải được gọi từ bên trong khối đồng bộ hóa."
  },
  {
    question: "Collection nào trong Java đảm bảo các thao tác FIFO (First-In-First-Out)?",
    options: ["Queue", "Stack", "Set", "Map"],
    answer: 0,
    explanation: "Queue là một interface collection trong Java đảm bảo các thao tác FIFO (First-In-First-Out). Nó định nghĩa các phương thức như offer(), poll(), peek() để thêm, loại bỏ và kiểm tra phần tử ở đầu hàng đợi. Các triển khai phổ biến bao gồm LinkedList và PriorityQueue."
  },
  {
    question: "Lớp nào được sử dụng để tạo stream đầu vào từ file trong Java?",
    options: ["FileInputStream", "FileOutputStream", "FileReader", "FileWriter"],
    answer: 0,
    explanation: "FileInputStream là một lớp trong Java được sử dụng để tạo stream đầu vào từ file. Nó là một byte stream dùng để đọc dữ liệu nhị phân từ file, trong khi FileReader là character stream dùng cho dữ liệu văn bản."
  },
  {
    question: "Từ khóa nào trong Java đảm bảo rằng biến luôn được đọc/ghi trực tiếp từ bộ nhớ chính?",
    options: ["volatile", "synchronized", "transient", "final"],
    answer: 0,
    explanation: "Từ khóa volatile trong Java đảm bảo rằng biến luôn được đọc/ghi trực tiếp từ bộ nhớ chính, không sử dụng cache của CPU. Điều này đảm bảo khả năng hiển thị (visibility) của giá trị mới nhất giữa các luồng, nhưng không giải quyết vấn đề đồng thời (atomicity)."
  },
  {
    question: "Interface nào trong Java Collection Framework cung cấp các thao tác stack và queue?",
    options: ["Deque", "List", "Set", "Map"],
    answer: 0,
    explanation: "Deque (Double-ended queue) là một interface trong Java Collection Framework cung cấp các thao tác stack và queue. Nó mở rộng Queue interface và hỗ trợ thêm/xóa phần tử ở cả hai đầu. LinkedList là một triển khai phổ biến của Deque interface."
  },
  {
    question: "Ngoại lệ nào được ném khi cố gắng truy cập phần tử ngoài phạm vi của mảng?",
    options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException", "ClassCastException"],
    answer: 0,
    explanation: "ArrayIndexOutOfBoundsException được ném khi cố gắng truy cập phần tử ngoài phạm vi của mảng trong Java. Ví dụ, truy cập vị trí thứ 10 trong mảng có kích thước 5 sẽ gây ra ngoại lệ này. Đây là một RuntimeException nên không bắt buộc phải bắt hoặc khai báo."
  },
  {
    question: "Phương thức nào được sử dụng để tạm dừng luồng hiện tại trong một khoảng thời gian?",
    options: ["Thread.sleep()", "Thread.wait()", "Thread.yield()", "Thread.pause()"],
    answer: 0,
    explanation: "Thread.sleep() được sử dụng để tạm dừng luồng hiện tại trong một khoảng thời gian xác định (tính bằng mili giây). Phương thức này có thể ném InterruptedException nếu luồng bị interrupt trong khi sleep, nên phải được đặt trong try-catch hoặc khai báo throws."
  },
  {
    question: "Lớp nào trong Java cung cấp khả năng đọc từng dòng văn bản?",
    options: ["BufferedReader", "FileReader", "InputStreamReader", "FileInputStream"],
    answer: 0,
    explanation: "BufferedReader là lớp trong Java cung cấp khả năng đọc văn bản theo từng dòng thông qua phương thức readLine(). Nó đọc text từ character-input stream với bộ đệm, giúp tăng hiệu suất đọc dữ liệu."
  },
  {
    question: "Collection nào trong Java có hiệu suất tốt nhất cho tìm kiếm phần tử?",
    options: ["HashSet", "LinkedList", "ArrayList", "Vector"],
    answer: 0,
    explanation: "HashSet có hiệu suất tốt nhất cho tìm kiếm phần tử trong Java với độ phức tạp O(1) cho các thao tác cơ bản (add, remove, contains). Nó sử dụng bảng băm bên trong và không lưu trữ các phần tử trùng lặp."
  },
  {
    question: "Phương thức nào được sử dụng để đợi một luồng khác kết thúc trong Java?",
    options: ["join()", "wait()", "sleep()", "yield()"],
    answer: 0,
    explanation: "Phương thức join() được sử dụng để đợi một luồng khác kết thúc trong Java. Khi thread1.join() được gọi từ thread2, thread2 sẽ tạm dừng cho đến khi thread1 kết thúc. Phương thức này có thể ném InterruptedException."
  },
  {
    question: "Lớp nào được sử dụng để ghi đối tượng vào file trong Java?",
    options: ["ObjectOutputStream", "FileOutputStream", "DataOutputStream", "PrintStream"],
    answer: 0,
    explanation: "ObjectOutputStream được sử dụng để ghi đối tượng vào file trong Java thông qua quá trình serialization. Đối tượng được ghi phải triển khai interface Serializable. Thường được sử dụng với FileOutputStream: new ObjectOutputStream(new FileOutputStream(file))."
  },
  {
    question: "Interface nào được sử dụng để tạo luồng mà không cần kế thừa lớp Thread?",
    options: ["Runnable", "Callable", "Executor", "ThreadGroup"],
    answer: 0,
    explanation: "Interface Runnable được sử dụng để tạo luồng mà không cần kế thừa lớp Thread trong Java. Cách tiếp cận này được ưu tiên hơn vì Java không hỗ trợ đa kế thừa, và cho phép tách biệt nhiệm vụ của luồng khỏi cơ chế luồng."
  },
  {
    question: "Collection nào trong Java lưu trữ các phần tử dựa trên độ ưu tiên?",
    options: ["PriorityQueue", "ArrayList", "HashSet", "LinkedList"],
    answer: 0,
    explanation: "PriorityQueue trong Java lưu trữ các phần tử dựa trên độ ưu tiên. Phần tử có độ ưu tiên cao nhất (hoặc thấp nhất, tùy theo cài đặt) sẽ được truy cập trước. Thứ tự dựa trên thứ tự tự nhiên của phần tử hoặc Comparator được cung cấp."
  },
  {
    question: "Khái niệm nào đề cập đến việc chuyển đổi đối tượng thành dòng byte để lưu trữ hoặc truyền?",
    options: ["Serialization", "Synchronization", "Marshalling", "Encapsulation"],
    answer: 0,
    explanation: "Serialization là quá trình chuyển đổi đối tượng Java thành dòng byte để lưu trữ hoặc truyền qua mạng, sau đó có thể khôi phục lại đối tượng (deserialization). Đối tượng cần serialization phải triển khai interface Serializable."
  },
  {
    question: "Từ khóa nào được sử dụng để ngăn biến được serialized trong Java?",
    options: ["transient", "volatile", "synchronized", "static"],
    answer: 0,
    explanation: "Từ khóa transient được sử dụng để ngăn biến được serialized trong Java. Khi một đối tượng được serialized, các biến được đánh dấu transient sẽ không được lưu trữ trong stream, và sẽ được khởi tạo với giá trị mặc định khi deserialization."
  },
  {
    question: "Phương thức nào của Thread cung cấp cơ hội cho luồng khác thực thi?",
    options: ["yield()", "sleep()", "join()", "wait()"],
    answer: 0,
    explanation: "Phương thức yield() của Thread cung cấp cơ hội cho luồng khác có cùng độ ưu tiên thực thi. Nó tạm thời tạm dừng luồng hiện tại và cho phép bộ lập lịch CPU chọn luồng khác thực thi, nhưng không đảm bảo luồng sẽ từ bỏ CPU."
  },
  {
    question: "Ngoại lệ nào được ném khi cố gắng truy cập một đối tượng null?",
    options: ["NullPointerException", "IllegalArgumentException", "ClassCastException", "IndexOutOfBoundsException"],
    answer: 0,
    explanation: "NullPointerException được ném khi cố gắng truy cập một đối tượng null trong Java. Điều này xảy ra khi gọi phương thức hoặc truy cập thuộc tính của một tham chiếu null. Đây là một RuntimeException phổ biến và là nguyên nhân của nhiều lỗi trong ứng dụng Java."
  },
  {
    question: "Lớp nào cung cấp các phương thức để mở tệp và tạo stream I/O trong Java?",
    options: ["File", "Path", "Directory", "Folder"],
    answer: 0,
    explanation: "Lớp File trong Java cung cấp các phương thức để mở tệp và tạo stream I/O. Nó đại diện cho đường dẫn tệp hoặc thư mục trong hệ thống tệp. Từ Java 7, API NIO.2 với các lớp như Path cung cấp các khả năng mạnh mẽ hơn để thao tác với tệp."
  },
  {
    question: "Loại lock nào cho phép nhiều luồng đọc cùng một thời điểm nhưng chỉ một luồng ghi?",
    options: ["ReadWriteLock", "ReentrantLock", "Semaphore", "CountDownLatch"],
    answer: 0,
    explanation: "ReadWriteLock là một loại lock trong Java cho phép nhiều luồng đọc cùng một thời điểm nhưng chỉ một luồng ghi. Điều này tối ưu hóa hiệu suất trong các tình huống có nhiều thao tác đọc hơn ghi. ReentrantReadWriteLock là một triển khai phổ biến của interface này."
  },
  {
    question: "Interface nào cung cấp phương thức call() tương tự Runnable nhưng trả về giá trị?",
    options: ["Callable", "Runnable", "Future", "Executor"],
    answer: 0,
    explanation: "Interface Callable trong Java cung cấp phương thức call() tương tự Runnable nhưng có thể trả về kết quả và ném ngoại lệ. Nó thường được sử dụng với ExecutorService để thực thi tác vụ bất đồng bộ và lấy kết quả thông qua Future."
  },
  {
    question: "Lớp nào trong Java cung cấp các thao tác nguyên tử với biến số nguyên?",
    options: ["AtomicInteger", "Semaphore", "CountDownLatch", "CyclicBarrier"],
    answer: 0,
    explanation: "AtomicInteger trong Java cung cấp các thao tác nguyên tử với biến số nguyên, đảm bảo tính nhất quán trong môi trường đa luồng mà không cần sử dụng synchronized. Nó là một phần của java.util.concurrent.atomic package và cung cấp các phương thức như incrementAndGet(), compareAndSet()."
  },
  {
    question: "Phương thức nào được sử dụng để kiểm tra xem một luồng có đang chạy không?",
    options: ["isAlive()", "isRunning()", "getState()", "checkStatus()"],
    answer: 0,
    explanation: "Phương thức isAlive() của lớp Thread được sử dụng để kiểm tra xem một luồng có đang chạy không. Nó trả về true nếu luồng đã được bắt đầu và chưa chết, false nếu luồng chưa bắt đầu hoặc đã chết."
  },
  {
    question: "Collection nào trong Java cung cấp các thao tác nguyên tử và an toàn với đa luồng?",
    options: ["ConcurrentHashMap", "HashMap", "Hashtable", "TreeMap"],
    answer: 0,
    explanation: "ConcurrentHashMap trong Java cung cấp các thao tác nguyên tử và an toàn với đa luồng. Khác với Hashtable, nó cho phép truy cập đồng thời bằng cách chia nhỏ map thành nhiều phân đoạn, chỉ khóa phân đoạn khi cần thiết, cung cấp hiệu suất tốt hơn trong môi trường đa luồng."
  },
  {
    question: "Lớp nào dùng để đọc đối tượng từ file trong Java?",
    options: ["ObjectInputStream", "FileInputStream", "DataInputStream", "BufferedInputStream"],
    answer: 0,
    explanation: "ObjectInputStream được sử dụng để đọc đối tượng từ file trong Java thông qua quá trình deserialization. Nó đọc các đối tượng đã được ghi bởi ObjectOutputStream. Thường được sử dụng với FileInputStream: new ObjectInputStream(new FileInputStream(file))."
  },
  {
    question: "Ngoại lệ nào được ném khi không đủ bộ nhớ để cấp phát cho đối tượng?",
    options: ["OutOfMemoryError", "StackOverflowError", "MemoryLeakException", "HeapOverflowException"],
    answer: 0,
    explanation: "OutOfMemoryError được ném khi JVM không đủ bộ nhớ để cấp phát cho đối tượng mới. Đây là Error chứ không phải Exception, thường xảy ra khi heap space đầy, có quá nhiều đối tượng hoặc kích thước đối tượng quá lớn. Thường không nên bắt và xử lý lỗi này."
  },
  {
    question: "Đâu là cách tốt nhất để tránh deadlock trong Java?",
    options: [
      "Luôn lấy lock theo cùng một thứ tự",
      "Không bao giờ sử dụng synchronized",
      "Sử dụng sleep() giữa các lock",
      "Chỉ sử dụng một lock duy nhất"
    ],
    answer: 0,
    explanation: "Một trong những cách tốt nhất để tránh deadlock trong Java là luôn lấy lock theo cùng một thứ tự. Điều này ngăn chặn tình huống hai luồng chờ đợi tài nguyên của nhau (A đợi B và B đợi A). Các cách khác bao gồm sử dụng timeout khi lấy lock và tránh các lock lồng nhau khi có thể."
  },
  {
    question: "Công cụ đồng bộ hóa nào trong Java tạm dừng luồng cho đến khi đạt đến số đếm zero?",
    options: ["CountDownLatch", "CyclicBarrier", "Semaphore", "Phaser"],
    answer: 0,
    explanation: "CountDownLatch là một công cụ đồng bộ hóa trong Java tạm dừng luồng cho đến khi đạt đến số đếm zero. Nó khởi tạo với số đếm cụ thể, các luồng gọi await() sẽ bị chặn cho đến khi số đếm đạt zero thông qua các lệnh countDown(). Khác với CyclicBarrier, nó không thể sử dụng lại."
  },
  {
    question: "Phương thức nào được sử dụng để đánh dấu một luồng nên dừng thực thi?",
    options: ["interrupt()", "stop()", "kill()", "terminate()"],
    answer: 0,
    explanation: "Phương thức interrupt() được sử dụng để đánh dấu một luồng nên dừng thực thi trong Java. Nó đặt cờ interrupted của luồng, nhưng không buộc luồng dừng ngay lập tức. Luồng phải kiểm tra trạng thái của chính nó (isInterrupted() hoặc Thread.interrupted()) và phản ứng phù hợp."
  }
];
