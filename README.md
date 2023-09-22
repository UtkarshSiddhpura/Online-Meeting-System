# Developed a personalized online meeting system for AICTE

### Contributing to Project: see [Contributing.md](./CONTRIBUTING.md)

## Why we need personalized Meeting system ?

-   **Confidential Information Sharing**: Secure platform for sharing confidential information.
-   **No Vendor Lock-In**: Avoid dependency on a specific vendor like google, microsoft, zoom, etc

-   **Custom Features**:

    -   **File Sharing**
    -   **Meeting Summarization**
    -   **Future Feature Support**
    -   **Option Between Peer-to-Peer & Server-Based Meetings**
    -   **Notification System**

-   **Custom User Interface with Translation**
-   **Authorization Based on Department**

## Peer-to-Peer (P2P) Meetings

### Why P2P

-   **Less Server Utilization**
-   **Server Independence**
-   **Lower Latency**
-   **end-to-end encryption**

### Why Not P2P

-   **Scalability**: Large-scale P2P meetings may pose challenges, necessitating server-based solutions.
-   **Low Bandwidth**: Slow internet connections may not have enough bandwidth to support high-quality video and audio in real-time

## What We Can Build

-   **Progressive Web App (PWA)**: Ensure accessibility from various devices.
-   **User Management** (Using PocketBase):
    -   Registration
    -   Email Verification
    -   Login
    -   Departments
    -   Meeting Scheduling
    -   Real-time Communication Between Users
    -   Starting Meetings
    -   P2P Meetings
    -   Server-Based Meetings (Separate Server Required)
    -   Meetings Quality
    -   Meeting Subtitles (Separate Server)
-   **User Interface** (React):
    -   Registration/Login Page
    -   Dashboard/Department Page/Schedule Page
    -   Meeting Page (Library for P2P required):
        -   Video Player
        -   Participant Controls (host controls)
        -   Video Controls
        -   Leave Meeting
        -   Raise Hand/Reactions
        -   Text Chat
        -   Polls

## Getting Started

-   Create a React Repository (Use ShadCn or Material UI - To be decided).
-   Backend Development Using PocketBase and JavaScript SDK.
