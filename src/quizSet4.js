export const quizSet4 = [
  {
    question: "Biểu thức Lambda trong Java được giới thiệu từ phiên bản nào?",
    options: ["Java 8", "Java 7", "Java 9", "Java 6"],
    answer: 0,
    explanation: "Biểu thức Lambda trong Java được giới thiệu từ phiên bản Java 8. Đây là một tính năng quan trọng mở đường cho lập trình hàm (functional programming) trong Java và là cơ sở cho nhiều tính năng khác như Stream API, phương thức tham chiếu, và default methods trong interface."
  },
  {
    question: "Cú pháp nào đúng cho biểu thức Lambda trong Java?",
    options: ["(parameters) -> expression", "parameters => expression", "parameters -> {expression}", "[parameters] => expression"],
    answer: 0,
    explanation: "Cú pháp đúng cho biểu thức Lambda trong Java là (parameters) -> expression hoặc (parameters) -> { statements; }. Dấu mũi tên -> là một phần của cú pháp Lambda và phân tách danh sách tham số từ phần thân biểu thức Lambda."
  },
  {
    question: "Functional interface trong Java có đặc điểm gì?",
    options: ["Chỉ có một phương thức trừu tượng", "Không có phương thức", "Có nhiều phương thức trừu tượng", "Chỉ có các phương thức static"],
    answer: 0,
    explanation: "Functional interface trong Java là interface chỉ có một phương thức trừu tượng (SAM - Single Abstract Method). Nó có thể có các phương thức default, static, và các phương thức từ Object class, nhưng chỉ có duy nhất một phương thức trừu tượng. Annotation @FunctionalInterface được sử dụng để đánh dấu và kiểm tra tại thời điểm biên dịch."
  },
  {
    question: "Interface nào trong Java đại diện cho hàm nhận một tham số và không trả về kết quả?",
    options: ["Consumer<T>", "Supplier<T>", "Function<T,R>", "Predicate<T>"],
    answer: 0,
    explanation: "Consumer<T> là functional interface trong Java đại diện cho hàm nhận một tham số kiểu T và không trả về kết quả (void). Phương thức trừu tượng của nó là accept(T t). Thường được sử dụng khi cần thực hiện một hành động trên đối tượng mà không cần kết quả trả về."
  },
  {
    question: "Interface nào trong Java đại diện cho hàm trả về giá trị mà không nhận tham số?",
    options: ["Supplier<T>", "Consumer<T>", "Function<T,R>", "Predicate<T>"],
    answer: 0,
    explanation: "Supplier<T> là functional interface trong Java đại diện cho hàm không nhận tham số và trả về giá trị kiểu T. Phương thức trừu tượng của nó là get(). Thường được sử dụng khi cần tạo hoặc cung cấp giá trị mà không cần đầu vào."
  },
  {
    question: "Stream API trong Java được sử dụng để làm gì?",
    options: [
      "Xử lý tập hợp dữ liệu theo kiểu khai báo",
      "Đọc và ghi file",
      "Tạo giao diện người dùng",
      "Kết nối cơ sở dữ liệu"
    ],
    answer: 0,
    explanation: "Stream API trong Java được sử dụng để xử lý tập hợp dữ liệu theo kiểu khai báo (declarative). Nó cho phép thực hiện các thao tác như filter, map, reduce, collect trên dãy các phần tử một cách dễ dàng và có thể song song hóa, giúp code ngắn gọn và dễ đọc hơn."
  },
  {
    question: "Phương thức nào được sử dụng để biến một Collection thành Stream trong Java?",
    options: ["stream()", "toStream()", "createStream()", "asStream()"],
    answer: 0,
    explanation: "Phương thức stream() được sử dụng để biến một Collection thành Stream trong Java. Ví dụ: List<String> list = Arrays.asList(\"a\", \"b\", \"c\"); Stream<String> stream = list.stream();"
  },
  {
    question: "Phương thức nào trong Stream API được sử dụng để lọc các phần tử?",
    options: ["filter()", "map()", "reduce()", "collect()"],
    answer: 0,
    explanation: "Phương thức filter() trong Stream API được sử dụng để lọc các phần tử dựa trên một Predicate. Nó trả về một Stream mới chỉ chứa các phần tử thỏa mãn điều kiện. Ví dụ: stream.filter(n -> n > 5) trả về stream chỉ chứa các số lớn hơn 5."
  },
  {
    question: "Phương thức nào trong Stream API chuyển đổi mỗi phần tử thành một phần tử khác?",
    options: ["map()", "filter()", "flatMap()", "reduce()"],
    answer: 0,
    explanation: "Phương thức map() trong Stream API chuyển đổi mỗi phần tử thành một phần tử khác bằng cách áp dụng một Function. Nó trả về một Stream mới với các phần tử đã được biến đổi. Ví dụ: stream.map(String::toUpperCase) chuyển đổi mỗi chuỗi thành chữ hoa."
  },
  {
    question: "Phương thức nào trong Stream API được sử dụng để thu thập kết quả thành Collection?",
    options: ["collect()", "reduce()", "forEach()", "count()"],
    answer: 0,
    explanation: "Phương thức collect() trong Stream API được sử dụng để thu thập kết quả từ Stream thành một Collection hoặc một giá trị duy nhất. Nó thường được sử dụng với các Collector từ lớp Collectors, ví dụ: stream.collect(Collectors.toList()), stream.collect(Collectors.toMap(...)), stream.collect(Collectors.groupingBy(...))."
  },
  {
    question: "Phương thức nào trong Stream API được sử dụng để kết hợp các phần tử thành một giá trị duy nhất?",
    options: ["reduce()", "collect()", "sum()", "combine()"],
    answer: 0,
    explanation: "Phương thức reduce() trong Stream API được sử dụng để kết hợp các phần tử của Stream thành một giá trị duy nhất bằng cách áp dụng một phép toán lặp đi lặp lại. Ví dụ: stream.reduce(0, (a, b) -> a + b) tính tổng các phần tử."
  },
  {
    question: "Phương thức nào trong Java 8 được sử dụng để tham chiếu đến phương thức?",
    options: ["Method references (::)", "Lambda expressions", "Anonymous classes", "Default methods"],
    answer: 0,
    explanation: "Method references (::) trong Java 8 được sử dụng để tham chiếu đến phương thức. Đây là cách viết ngắn gọn hơn cho lambda expression trong trường hợp lambda chỉ gọi một phương thức. Ví dụ: String::length tương đương với s -> s.length()."
  },
  {
    question: "Loại method reference nào tham chiếu đến phương thức của một đối tượng cụ thể?",
    options: ["object::instanceMethod", "Class::staticMethod", "Class::instanceMethod", "Class::new"],
    answer: 0,
    explanation: "Loại method reference object::instanceMethod tham chiếu đến phương thức của một đối tượng cụ thể. Ví dụ: System.out::println tham chiếu đến phương thức println của đối tượng cụ thể System.out."
  },
  {
    question: "Loại method reference nào tham chiếu đến constructor?",
    options: ["Class::new", "Class::constructor", "new::Class", "Class::create"],
    answer: 0,
    explanation: "Loại method reference Class::new tham chiếu đến constructor của một lớp. Ví dụ: ArrayList::new có thể được sử dụng như một Supplier<ArrayList<T>> hoặc Function để tạo instance mới của ArrayList."
  },
  {
    question: "Interface nào trong Java được sử dụng để biểu diễn hàm kiểm tra điều kiện, trả về boolean?",
    options: ["Predicate<T>", "Consumer<T>", "Function<T,R>", "Supplier<T>"],
    answer: 0,
    explanation: "Predicate<T> là functional interface trong Java được sử dụng để biểu diễn hàm kiểm tra điều kiện, nhận một tham số kiểu T và trả về boolean. Phương thức trừu tượng của nó là test(T t). Thường được sử dụng trong filter() và các tình huống cần kiểm tra điều kiện."
  },
  {
    question: "Phương thức nào trong Stream API tạo Stream vô hạn?",
    options: ["Stream.iterate()", "Stream.of()", "Stream.range()", "Stream.create()"],
    answer: 0,
    explanation: "Stream.iterate() là một trong những phương thức trong Stream API tạo Stream vô hạn. Nó nhận giá trị ban đầu và một hàm để tính giá trị tiếp theo. Ví dụ: Stream.iterate(0, n -> n + 1) tạo stream vô hạn các số nguyên từ 0. Khi sử dụng stream vô hạn, cần giới hạn bằng limit() hoặc các phương thức khác."
  },
  {
    question: "Optional trong Java 8 được sử dụng để làm gì?",
    options: [
      "Đại diện cho giá trị có thể null một cách an toàn",
      "Tạo tham số tùy chọn cho phương thức",
      "Cho phép ghi đè các phương thức",
      "Đánh dấu lớp là không bắt buộc"
    ],
    answer: 0,
    explanation: "Optional<T> trong Java 8 được sử dụng để đại diện cho giá trị có thể null một cách an toàn. Nó là một container có thể chứa giá trị hoặc không (empty), giúp tránh NullPointerException và rõ ràng hơn về việc một phương thức có thể trả về null."
  },
  {
    question: "Phương thức nào trong Optional được sử dụng để thực thi code nếu giá trị tồn tại?",
    options: ["ifPresent()", "isPresent()", "ifExists()", "whenPresent()"],
    answer: 0,
    explanation: "Phương thức ifPresent() trong Optional được sử dụng để thực thi code nếu giá trị tồn tại. Nó nhận một Consumer và chỉ thực thi consumer đó nếu Optional chứa giá trị. Ví dụ: optional.ifPresent(value -> System.out.println(value));"
  },
  {
    question: "Phương thức nào được sử dụng để tạo một paralel stream trong Java?",
    options: ["parallelStream()", "parallel()", "streamParallel()", "concurrentStream()"],
    answer: 0,
    explanation: "Phương thức parallelStream() được sử dụng để tạo một parallel stream từ Collection trong Java. Nó cho phép thực thi các thao tác song song, tận dụng nhiều luồng để tăng hiệu suất. Ví dụ: list.parallelStream(). Ngoài ra, có thể dùng stream().parallel() để chuyển đổi sequential stream thành parallel stream."
  },
  {
    question: "Trong Java 8, phương thức nào cho phép thêm phương thức có triển khai vào interface?",
    options: ["default methods", "static methods", "abstract methods", "concrete methods"],
    answer: 0,
    explanation: "Trong Java 8, default methods cho phép thêm phương thức có triển khai vào interface. Các phương thức này được khai báo với từ khóa default và có thân phương thức, cho phép thêm chức năng mới vào interface mà không ảnh hưởng đến các lớp đã triển khai."
  },
  {
    question: "Phương thức nào trong Stream API dùng để lấy một số lượng phần tử đầu tiên?",
    options: ["limit()", "take()", "first()", "head()"],
    answer: 0,
    explanation: "Phương thức limit(n) trong Stream API dùng để lấy n phần tử đầu tiên từ stream. Nó trả về một stream mới chỉ chứa tối đa n phần tử đầu tiên. Đặc biệt hữu ích khi làm việc với stream vô hạn. Ví dụ: stream.limit(5) lấy tối đa 5 phần tử đầu tiên."
  },
  {
    question: "Phương thức nào được sử dụng để thực thi một hành động với mỗi phần tử trong Stream?",
    options: ["forEach()", "each()", "iterate()", "apply()"],
    answer: 0,
    explanation: "Phương thức forEach() được sử dụng để thực thi một hành động với mỗi phần tử trong Stream. Nó nhận một Consumer và áp dụng consumer đó cho mỗi phần tử. Đây là một terminal operation, nghĩa là stream không thể sử dụng tiếp sau khi gọi forEach(). Ví dụ: stream.forEach(System.out::println)."
  },
  {
    question: "Phương thức nào trong Stream API dùng để bỏ qua một số lượng phần tử đầu tiên?",
    options: ["skip()", "drop()", "discard()", "ignore()"],
    answer: 0,
    explanation: "Phương thức skip(n) trong Stream API dùng để bỏ qua n phần tử đầu tiên từ stream. Nó trả về một stream mới bắt đầu từ phần tử thứ n+1 của stream ban đầu. Ví dụ: stream.skip(5) bỏ qua 5 phần tử đầu tiên và trả về stream với các phần tử còn lại."
  },
  {
    question: "Phương thức nào được sử dụng để chuyển đổi từ Stream<Stream<T>> thành Stream<T>?",
    options: ["flatMap()", "map()", "flatten()", "join()"],
    answer: 0,
    explanation: "Phương thức flatMap() được sử dụng để chuyển đổi từ Stream của các Stream (hoặc các Collection, array) thành một Stream phẳng. Nó áp dụng một hàm cho mỗi phần tử, hàm này trả về một stream, sau đó tất cả các stream kết quả được 'làm phẳng' thành một stream duy nhất. Ví dụ: stream.flatMap(Collection::stream)."
  },
  {
    question: "Phương thức nào trong Stream API dùng để sắp xếp các phần tử?",
    options: ["sorted()", "order()", "sort()", "arrange()"],
    answer: 0,
    explanation: "Phương thức sorted() trong Stream API dùng để sắp xếp các phần tử theo thứ tự tự nhiên hoặc theo một Comparator được cung cấp. Nó trả về một stream mới với các phần tử đã được sắp xếp. Ví dụ: stream.sorted() hoặc stream.sorted(Comparator.reverseOrder())."
  },
  {
    question: "Phương thức nào kiểm tra xem tất cả các phần tử trong Stream có thỏa mãn điều kiện không?",
    options: ["allMatch()", "anyMatch()", "noneMatch()", "everyMatch()"],
    answer: 0,
    explanation: "Phương thức allMatch(Predicate) kiểm tra xem tất cả các phần tử trong Stream có thỏa mãn điều kiện được định nghĩa bởi Predicate không. Nó trả về true nếu tất cả phần tử đều thỏa mãn, ngược lại trả về false. Ví dụ: stream.allMatch(n -> n > 0) kiểm tra xem tất cả các phần tử có lớn hơn 0 không."
  },
  {
    question: "Phương thức nào kiểm tra xem có bất kỳ phần tử nào trong Stream thỏa mãn điều kiện?",
    options: ["anyMatch()", "allMatch()", "noneMatch()", "someMatch()"],
    answer: 0,
    explanation: "Phương thức anyMatch(Predicate) kiểm tra xem có bất kỳ phần tử nào trong Stream thỏa mãn điều kiện được định nghĩa bởi Predicate không. Nó trả về true nếu có ít nhất một phần tử thỏa mãn, ngược lại trả về false. Phương thức này có thể kết thúc sớm, ngay khi tìm thấy phần tử thỏa mãn."
  },
  {
    question: "Phương thức nào kiểm tra xem không có phần tử nào trong Stream thỏa mãn điều kiện?",
    options: ["noneMatch()", "allMatch()", "anyMatch()", "notMatch()"],
    answer: 0,
    explanation: "Phương thức noneMatch(Predicate) kiểm tra xem không có phần tử nào trong Stream thỏa mãn điều kiện được định nghĩa bởi Predicate. Nó trả về true nếu không có phần tử nào thỏa mãn, ngược lại trả về false. Phương thức này có thể kết thúc sớm, ngay khi tìm thấy phần tử thỏa mãn."
  },
  {
    question: "Interface nào trong Java đại diện cho hàm biến đổi một giá trị thành giá trị khác?",
    options: ["Function<T,R>", "Consumer<T>", "Supplier<T>", "Predicate<T>"],
    answer: 0,
    explanation: "Function<T,R> là functional interface trong Java đại diện cho hàm biến đổi giá trị kiểu T thành giá trị kiểu R. Phương thức trừu tượng của nó là R apply(T t). Thường được sử dụng trong các tình huống cần chuyển đổi từ một giá trị sang giá trị khác, như trong phương thức map() của Stream."
  },
  {
    question: "Phương thức nào trong Stream API trả về phần tử đầu tiên của Stream?",
    options: ["findFirst()", "first()", "getFirst()", "initial()"],
    answer: 0,
    explanation: "Phương thức findFirst() trong Stream API trả về phần tử đầu tiên của Stream dưới dạng Optional. Nếu Stream rỗng, nó trả về Optional.empty(). Đây là một terminal operation, nghĩa là stream không thể sử dụng tiếp sau khi gọi findFirst()."
  },
  {
    question: "Phương thức nào trong Optional trả về giá trị nếu tồn tại, hoặc giá trị mặc định nếu không?",
    options: ["orElse()", "getOrDefault()", "defaultIfEmpty()", "valueOr()"],
    answer: 0,
    explanation: "Phương thức orElse(defaultValue) trong Optional trả về giá trị nếu Optional không rỗng, hoặc giá trị mặc định được cung cấp nếu Optional rỗng. Ví dụ: optional.orElse(\"default\") trả về giá trị trong optional nếu có, nếu không trả về chuỗi \"default\"."
  },
  {
    question: "Phương thức nào trong Stream API trả về bất kỳ phần tử nào của Stream?",
    options: ["findAny()", "any()", "getAny()", "random()"],
    answer: 0,
    explanation: "Phương thức findAny() trong Stream API trả về bất kỳ phần tử nào của Stream dưới dạng Optional. Nó hữu ích khi làm việc với parallel streams vì không đảm bảo thứ tự và có thể trả về phần tử đầu tiên được tìm thấy, tăng hiệu suất."
  },
  {
    question: "Functional interface nào được sử dụng khi cần một hàm nhận hai tham số và trả về kết quả?",
    options: ["BiFunction<T,U,R>", "Function<T,R>", "BinaryOperator<T>", "Consumer<T,U>"],
    answer: 0,
    explanation: "BiFunction<T,U,R> là functional interface được sử dụng khi cần một hàm nhận hai tham số kiểu T và U, và trả về kết quả kiểu R. Phương thức trừu tượng của nó là R apply(T t, U u). Ví dụ: BiFunction<Integer, Integer, String> để kết hợp hai số và trả về chuỗi."
  },
  {
    question: "Phương thức nào được sử dụng để đếm số lượng phần tử trong Stream?",
    options: ["count()", "size()", "length()", "quantity()"],
    answer: 0,
    explanation: "Phương thức count() được sử dụng để đếm số lượng phần tử trong Stream. Nó trả về một long đại diện cho số lượng phần tử. Đây là một terminal operation, nghĩa là stream không thể sử dụng tiếp sau khi gọi count()."
  },
  {
    question: "Functional interface nào được sử dụng cho thao tác nhị phân khi hai tham số và kết quả cùng kiểu?",
    options: ["BinaryOperator<T>", "BiFunction<T,T,T>", "BiConsumer<T,T>", "Predicate<T,T>"],
    answer: 0,
    explanation: "BinaryOperator<T> là functional interface được sử dụng cho thao tác nhị phân khi hai tham số và kết quả cùng kiểu T. Nó là một specialization của BiFunction<T,T,T>. Thường được sử dụng trong reduce() để kết hợp các phần tử của Stream. Ví dụ: BinaryOperator<Integer> sum = (a, b) -> a + b;"
  },
  {
    question: "Phương thức nào chuyển đổi một Stream tuần tự thành Stream song song?",
    options: ["parallel()", "concurrent()", "parallelStream()", "async()"],
    answer: 0,
    explanation: "Phương thức parallel() chuyển đổi một Stream tuần tự thành Stream song song. Stream song song có thể thực thi các thao tác đồng thời trên nhiều luồng, tăng hiệu suất cho tập dữ liệu lớn. Ví dụ: stream.parallel().map(...).filter(...)."
  },
  {
    question: "Phương thức nào chuyển đổi một Stream song song thành Stream tuần tự?",
    options: ["sequential()", "single()", "serie()", "nonParallel()"],
    answer: 0,
    explanation: "Phương thức sequential() chuyển đổi một Stream song song thành Stream tuần tự. Stream tuần tự thực thi các thao tác trên một luồng duy nhất. Điều này có thể hữu ích khi cần đảm bảo thứ tự xử lý hoặc khi các thao tác không an toàn với đa luồng."
  },
  {
    question: "Phương thức nào trong Stream API được sử dụng để loại bỏ các phần tử trùng lặp?",
    options: ["distinct()", "unique()", "removeDuplicates()", "deduplicate()"],
    answer: 0,
    explanation: "Phương thức distinct() trong Stream API được sử dụng để loại bỏ các phần tử trùng lặp, tạo ra một stream mới chỉ chứa các phần tử duy nhất. Nó sử dụng phương thức equals() để so sánh các phần tử. Ví dụ: stream.distinct() loại bỏ tất cả các phần tử xuất hiện nhiều hơn một lần."
  },
  {
    question: "Functional interface nào được sử dụng khi cần một hàm nhận hai tham số và không trả về kết quả?",
    options: ["BiConsumer<T,U>", "Consumer<T>", "BiFunction<T,U,Void>", "BiOperator<T,U>"],
    answer: 0,
    explanation: "BiConsumer<T,U> là functional interface được sử dụng khi cần một hàm nhận hai tham số kiểu T và U, và không trả về kết quả (void). Phương thức trừu tượng của nó là void accept(T t, U u). Ví dụ: BiConsumer<String, Integer> để xử lý một cặp key-value."
  },
  {
    question: "Phương thức nào trong Stream API kết hợp hai stream thành một?",
    options: ["concat()", "merge()", "combine()", "join()"],
    answer: 0,
    explanation: "Phương thức static Stream.concat(stream1, stream2) trong Stream API kết hợp hai stream thành một stream duy nhất. Các phần tử từ stream1 sẽ xuất hiện trước, sau đó là các phần tử từ stream2. Ví dụ: Stream.concat(stream1, stream2) tạo một stream mới chứa tất cả phần tử từ cả hai stream."
  },
  {
    question: "Collector nào được sử dụng để thu thập các phần tử của Stream thành List?",
    options: ["Collectors.toList()", "Collectors.asList()", "Collectors.listOf()", "Collectors.toArray()"],
    answer: 0,
    explanation: "Collectors.toList() là collector được sử dụng để thu thập các phần tử của Stream thành List. Ví dụ: stream.collect(Collectors.toList()) chuyển đổi stream thành List chứa tất cả các phần tử của stream. Từ Java 16, có thể sử dụng phương thức toList() trực tiếp: stream.toList()."
  },
  {
    question: "Phương thức nào trong Optional được sử dụng để thực thi code nếu giá trị không tồn tại?",
    options: ["orElseGet()", "ifEmpty()", "whenEmpty()", "orElseRun()"],
    answer: 0,
    explanation: "Phương thức orElseGet(Supplier) trong Optional được sử dụng để trả về giá trị nếu Optional không rỗng, hoặc thực thi Supplier và trả về kết quả nếu Optional rỗng. Khác với orElse(), orElseGet() chỉ thực thi Supplier khi cần thiết (lazy evaluation). Ví dụ: optional.orElseGet(() -> computeExpensiveDefault())."
  },
  {
    question: "Phương thức nào trong Optional được sử dụng để ném ngoại lệ nếu giá trị không tồn tại?",
    options: ["orElseThrow()", "throwIfEmpty()", "getOrThrow()", "throwException()"],
    answer: 0,
    explanation: "Phương thức orElseThrow() trong Optional được sử dụng để trả về giá trị nếu Optional không rỗng, hoặc ném ngoại lệ nếu Optional rỗng. Từ Java 10, nó có thể được gọi không tham số để ném NoSuchElementException, hoặc với Supplier để ném ngoại lệ tùy chỉnh. Ví dụ: optional.orElseThrow(() -> new CustomException(\"Value not present\"))."
  },
  {
    question: "Phương thức nào trong Optional chuyển đổi giá trị nếu tồn tại?",
    options: ["map()", "transform()", "convert()", "apply()"],
    answer: 0,
    explanation: "Phương thức map(Function) trong Optional chuyển đổi giá trị nếu tồn tại bằng cách áp dụng Function và trả về Optional mới chứa kết quả. Nếu Optional ban đầu rỗng, nó trả về Optional.empty(). Ví dụ: optional.map(String::toUpperCase) chuyển đổi giá trị String thành chữ hoa nếu có."
  },
  {
    question: "Functional interface nào cung cấp phương thức test(T) trả về boolean?",
    options: ["Predicate<T>", "Function<T,Boolean>", "Consumer<T>", "Supplier<Boolean>"],
    answer: 0,
    explanation: "Predicate<T> là functional interface cung cấp phương thức test(T) nhận tham số kiểu T và trả về boolean. Nó được sử dụng rộng rãi trong các phương thức Stream như filter(), anyMatch(), allMatch(), noneMatch() để kiểm tra điều kiện."
  },
  {
    question: "Phương thức nào trong Stream API trả về mảng chứa các phần tử của Stream?",
    options: ["toArray()", "asArray()", "collect()", "toList().toArray()"],
    answer: 0,
    explanation: "Phương thức toArray() trong Stream API trả về mảng chứa các phần tử của Stream. Nó có hai phiên bản: toArray() trả về Object[], và toArray(IntFunction<A[]> generator) trả về mảng có kiểu cụ thể. Ví dụ: stream.toArray(String[]::new) trả về mảng String[]."
  },
  {
    question: "Phương thức nào trong Stream API cho phép thực thi một hành động với mỗi phần tử mà không ảnh hưởng đến Stream?",
    options: ["peek()", "forEach()", "inspect()", "observe()"],
    answer: 0,
    explanation: "Phương thức peek(Consumer) trong Stream API cho phép thực thi một hành động với mỗi phần tử mà không ảnh hưởng đến Stream. Khác với forEach(), peek() là intermediate operation, trả về stream mới và cho phép tiếp tục xử lý. Nó thường được sử dụng để gỡ lỗi hoặc ghi log trong chuỗi các thao tác Stream."
  },
  {
    question: "Java 8 giới thiệu loại interface nào để hỗ trợ lập trình hàm?",
    options: ["Functional interfaces", "Lambda interfaces", "Default interfaces", "Stream interfaces"],
    answer: 0,
    explanation: "Java 8 giới thiệu functional interfaces để hỗ trợ lập trình hàm. Đây là những interface có duy nhất một phương thức trừu tượng, cho phép sử dụng lambda expression và method reference để triển khai. Annotation @FunctionalInterface được sử dụng để đánh dấu và kiểm tra các interface này."
  },
  {
    question: "Phương thức nào trong Stream API được sử dụng để thực thi tác vụ song song?",
    options: [
      "parallel()",
      "concurrent()",
      "async()",
      "multithreaded()"
    ],
    answer: 0,
    explanation: "Phương thức parallel() trong Stream API được sử dụng để thực thi tác vụ song song, tận dụng nhiều luồng để xử lý dữ liệu. Nó biến đổi stream tuần tự thành stream song song. Hiệu suất song song thường tốt hơn với tập dữ liệu lớn và thao tác độc lập, không chia sẻ trạng thái."
  },
  {
    question: "Từ Java 9, phương thức nào được thêm vào trong Stream API để tạo Stream từ các giá trị nullable?",
    options: ["ofNullable()", "fromNullable()", "createOptional()", "nullableStream()"],
    answer: 0,
    explanation: "Từ Java 9, phương thức static Stream.ofNullable(T value) được thêm vào trong Stream API để tạo Stream từ các giá trị nullable. Nó trả về stream chứa một phần tử nếu value không null, hoặc stream rỗng nếu value là null. Điều này giúp tránh NullPointerException và giảm code boilerplate khi xử lý giá trị có thể null."
  },
  {
    question: "Functional interface nào trong java.util.function đại diện cho hàm không nhận tham số và không trả về kết quả?",
    options: ["Runnable", "Consumer<Void>", "Supplier<Void>", "Action"],
    answer: 0,
    explanation: "Runnable là functional interface đại diện cho hàm không nhận tham số và không trả về kết quả (void run()). Mặc dù nó không nằm trong package java.util.function mà trong java.lang, nhưng nó vẫn là một functional interface và có thể được sử dụng với lambda expression. Ví dụ: Runnable task = () -> System.out.println(\"Hello\");"
  },
  {
    question: "Collector nào được sử dụng để thu thập kết quả thành Map với key là kết quả của việc áp dụng một function?",
    options: ["groupingBy()", "toMap()", "partitioningBy()", "mapping()"],
    answer: 0,
    explanation: "Collectors.groupingBy(Function) được sử dụng để thu thập kết quả thành Map với key là kết quả của việc áp dụng function lên mỗi phần tử, và value là List các phần tử có cùng key. Ví dụ: stream.collect(Collectors.groupingBy(Person::getCity)) tạo Map<City, List<Person>> nhóm người theo thành phố."
  },
  {
    question: "Phương thức nào trong Stream API có thể được sử dụng để lọc các phần tử null?",
    options: ["filter(Objects::nonNull)", "removeNull()", "filterNull()", "nonNull()"],
    answer: 0,
    explanation: "Phương thức filter(Objects::nonNull) trong Stream API có thể được sử dụng để lọc các phần tử null khỏi stream. Objects::nonNull là method reference đến phương thức static nonNull của lớp Objects, trả về true nếu tham chiếu không null. Ví dụ: stream.filter(Objects::nonNull) tạo stream mới không chứa giá trị null."
  },
  {
    question: "Từ Java 9, phương thức nào trong Stream API tạo ra Stream có thứ tự cố định (không thay đổi)?",
    options: ["takeWhile()", "dropWhile()", "limit()", "skip()"],
    answer: 0,
    explanation: "Từ Java 9, phương thức takeWhile(Predicate) trong Stream API tạo ra Stream chứa các phần tử liên tiếp từ đầu stream thỏa mãn điều kiện. Nó dừng ngay khi gặp phần tử không thỏa mãn. Stream kết quả có thứ tự cố định và phụ thuộc vào thứ tự của stream ban đầu. Ví dụ: stream.takeWhile(n -> n < 5) lấy các phần tử liên tiếp < 5 từ đầu stream."
  },
  {
    question: "Từ Java 11, phương thức nào được thêm vào lớp String để chuyển đổi chuỗi thành Stream các dòng?",
    options: ["lines()", "toLines()", "splitLines()", "streamLines()"],
    answer: 0,
    explanation: "Từ Java 11, phương thức lines() được thêm vào lớp String để chuyển đổi chuỗi thành Stream các dòng văn bản (tách theo dấu xuống dòng). Ví dụ: string.lines() tạo stream chứa các dòng văn bản từ chuỗi, tương tự nhưng tiện lợi hơn so với string.split(\"\\n\")."
  }
];
