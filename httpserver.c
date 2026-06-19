// preprocessings
// basic flow socket()=> bind() => listen () => accept() => recv() (path of file
// ) send() by searching that file
#include <arpa/inet.h>
#include <netdb.h>
#include <netinet/in.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>
// just the color schemes for some characters to be displayed on screen
#define BLUE "\033[1;36m"
#define RED "\033[1;31m"
#define RESET "\033[0m"
// parameters
void Render(char path[], char method[], int new_client, char *req);
char *Get_Content(char *p);
void display_reqinfo(char *path, char *method, char buffer[]);
void set_path_method(char *p, char *m, char req[]);
// main function
int main() {

  // this is client struct (Form for understanding )

  typedef struct sockaddr_storage Client;
  Client my_client;
  socklen_t size = sizeof(my_client);
  memset(&my_client, 0, sizeof(my_client)); // setting initailly to 0

  // server part

  typedef struct addrinfo SERVER;
  SERVER my_server, *res, *node;
  memset(&my_server, 0, sizeof(my_server));
  // these are just the suggestions to follow by the server
  my_server.ai_family = AF_INET;
  my_server.ai_socktype = SOCK_STREAM;
  my_server.ai_flags = AI_PASSIVE;
  // this will fill the server struct on its own
  int status = getaddrinfo(NULL, "8080", &my_server, &res);
  // this function returns 0 on success so check if fails
  if (status < 0) {
    fprintf(stderr, "ERROR HAPPENED " RED "!!"
                    "\n" RESET);
    return 1;
  }

  printf("Created the Structure for Server and Client !\n");

  // making the socket (file descriptor)
  int my_socket;
  for (node = res; node != NULL; node = node->ai_next) {

    my_socket = socket(AF_INET, res->ai_socktype, 0);
    if (my_socket < 0)
      continue;
    printf("Created the socket ->" RED "%d"
           "\n" RESET,
           my_socket);

    // binding port number to our server socket (like a telephone number )
    int binding = bind(my_socket, res->ai_addr, res->ai_addrlen);

    if (binding < 0) {
      close(my_socket);
      continue;
    }
    printf("Binded Successfully " RED "!!"
           "\n" RESET);

    break;
  }

  // server now ready to listen 10 requests in a row
  listen(my_socket, 10);

  printf("Listening NOW " RED "!!"
         "\n" RESET);
  // after the listen we make a infinite loop so that no matter on how many
  // browsers you open , how many requests one client sends the localhost you
  // will get the resposnse repeate the accept
  pid_t pid;
  while (1) {
    char path[100], method[100];
    char req[2048];

    // when client gets attached make its own socket
    int new_client = accept(my_socket, (struct sockaddr *)&my_client, &size);
    if (new_client < 0)
      continue;
    printf("Looking for Connection\n");
    pid = fork();
    if (pid < 0) {
      printf("This Child process FAiled !!\n");
      continue;
    }
    if (pid == 0) {
      // request that client sends
      int received_req = recv(new_client, req, sizeof(req), 0);
      printf("Received request " RED "!!"
             "\n" RESET);
      req[received_req] = '\0';
      if (received_req > 0) {
        set_path_method(path, method, req);
        Render(path, method, new_client, req);
      }
      exit(0);
    }
    close(new_client);
  }
  close(my_socket);
  freeaddrinfo(res);
}
void set_path_method(char *p, char *m, char req[]) {
  sscanf(req, "%s %s", m, p);
  // 2. Find if there is a '?' anywhere inside the path array
  char *query_start = strchr(p, '?');

  if (query_start != NULL) {
    // Drop a null terminator right at the '?' character!
    // This instantly cuts off the entire query string wrapper safely.
    *query_start = '\0';
  }
}

// used in helping browser what type of data coming
char *Get_Content(char *p) {
  char *ext = strrchr(p, '.');
  if (strcmp(ext, ".html") == 0)
    return "text/html";
  else if (strcmp(ext, ".css") == 0)
    return "text/css";
  else if (strcmp(ext, ".js") == 0)
    return "application/javascript";
  else if (strcmp(ext, ".jpg") == 0)
    return "image/jpg";
  else if (strcmp(ext, ".png") == 0)
    return "image/png";
  else if (strcmp(ext, ".webp") == 0)
    return "image/webp";
  else if (strcmp(ext, ".jpeg") == 0)
    return "image/jpeg";
  else if (strcmp(ext, ".avif") == 0)
    return "image/avif";
  else
    return "application/octet-stream";
}
void Render(char path[], char method[], int new_client, char *req) {
  char *f = path;
  // 1. If path is exactly "/", steer it to your home file
  if (strcmp(path, "/") == 0) {
    f = "home.html"; // Make sure your file matches this exact name!
  } else if (path[0] == '/') {
    f = path + 1;
  }
  FILE *fptr = fopen(f, "rb");
  // sometimes user hasnt set a favicon.ico or any other asset that browser
  // demands but you dont have then gracefully send error code 400 this wont
  // break the server
  if (fptr == NULL) {
    char *err = "HTTP/1.1 404 Not Found\r\nContent-Type :0\r\n\r\n";
    send(new_client, err, strlen(err), 0);
  }
  // shift the file pointer to end of file At the last chracter (0 offset !)
  fseek(fptr, 0, SEEK_END);
  // note the index at that position
  long fsize = ftell(fptr);
  // again shift pointer to first character not to cause any error
  fseek(fptr, 0, SEEK_SET);
  char *file_buffer = malloc(fsize + 1);
  // basically copies the file we get to buffer array we made
  // used to be parsed to the browser
  fread(file_buffer, 1, fsize, fptr);
  fclose(fptr);
  char header[512];
  char *Content = Get_Content(f);

  // heades must be sent other wise brower will have 0 idea what to do with raw
  // incoming data
  sprintf(header,
          "HTTP/1.1 200 OK\r\n"
          "Content-Type: %s\r\n"
          "Content-Length: %ld\r\n"
          "\r\n",
          Content, fsize);
  // first sending headers then the file we read through request's path
  send(new_client, header, strlen(header), 0);
  send(new_client, file_buffer, fsize, 0);
  display_reqinfo(path, method, file_buffer);
}
void display_reqinfo(char *path, char *method, char buffer[]) {
  printf(RED "*" BLUE "----------------------------------------------" RED "*"
             "\n" RESET);
  printf("%s %s\n", method, path);
  printf(RED "*" BLUE "----------------------------------------------" RED "*"
             "\n" RESET);
  int size = strlen(buffer);
  printf(RED "-*#*-"
             "Sent" BLUE "  %d"
             "Bytes !!\n" RESET,
         size);
  printf("\n \n");
}
