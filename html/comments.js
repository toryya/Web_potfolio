const portfolioItems = document.querySelectorAll('.portfolio__item');

function fetchComments(postId) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(comments => {
            renderComments(comments, postId);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            displayError(`⚠ Что-то пошло не так.`, postId);
        });
}

function renderComments(comments, postId) {
    const commentContainer = document.querySelector(`.portfolio__item[data-post-id="${postId}"] .comments`);
    commentContainer.innerHTML = '';

    const loadingIndicators = document.querySelectorAll('.loading-indicator')
    loadingIndicators.forEach((loadingIndicator) => {
        loadingIndicator.remove();
    })


    if (comments.length > 0) {
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
      `;
            commentContainer.appendChild(commentElement);
        });
    } else {
        commentContainer.innerHTML = '<p>Комментариев пока нет.</p>';
    }
}

function displayError(message, postId) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.textContent = message;

    const commentContainer = document.querySelector(
        `.portfolio__item[data-post-id="${postId}"] .comments`
    );


    const loadingIndicators = document.querySelectorAll('.loading-indicator')
    loadingIndicators.forEach((loadingIndicator) => {
        loadingIndicator.remove();
    })


    commentContainer.appendChild(errorElement);
}

// Инициализация при загрузке страницы
window.addEventListener('load', () => {
    portfolioItems.forEach((item, index) => {
        const postId = index + 1;
        item.dataset.postId = postId;
        item.innerHTML += `
      <div class="comments"></div>
    `;
        fetchComments(postId);
    });
});
