
export const focus = {
    inserted: function (el) {
        el.focus()
    }
}
export const fontSize = {
    inserted: function (el, binding) {
        el.style.fontSize = binding.value + "px";
    }
}
export const color = {
    inserted: function (el, binding) {
        el.style.color = binding.value;
    }
}

export const pin = {
    inserted: function (el, binding) {
        const styles = binding.value?.style ? binding.value.style : { position: 'fixed', top: '200px', right: "0px" };
        const styleKeys = Object.keys(styles)
        styleKeys.forEach(key => {
            el.style[`${key}`] = styles[key]
        })
    }
}


export const seeMore = {
    inserted: function (el, binding) {
        const limit = binding.value?.limit || 100;
        const original = el.innerHTML;
        const totalTextLength = el.innerText.length

        if (totalTextLength > limit) {
            const summary = original.slice(0, limit);
            const expandLink = document.createElement('a');
            const collapseLink = document.createElement('a');

            expandLink.classList.add(binding.value?.classList ? binding.value.classList : '');
            collapseLink.classList.add(binding.value?.classList ? binding.value.classList : '');


            const styles = binding.value?.style ? binding.value.style : { color: '#0877e1' };
            const styleKeys = Object.keys(styles)
            styleKeys.forEach(key => {
                expandLink.style[`${key}`] = styles[key]
                collapseLink.style[`${key}`] = styles[key]
            })


            expandLink.innerHTML = '...see more';
            collapseLink.innerHTML = 'less more';

            const expandNode = () => {
                el.innerHTML = `${original} `;
                el.appendChild(collapseLink);
            }

            const collapseNode = () => {
                el.innerHTML = `${summary}`;
                el.appendChild(expandLink);
            }

            expandLink.addEventListener('click', expandNode);
            collapseLink.addEventListener('click', collapseNode)

            collapseNode();
        }
    }
}


export const atSign = {
    inserted: function (el, binding) {
        const regexExp = /@[\w]+(?=\s|$)/g
        const text = el.innerHTML
        const solidText = text.replace(regexExp, function (string) {
            return createAtSignAndHashSignDom(binding, string)
        })
        el.innerHTML = solidText
    }
}
export const hashSign = {
    inserted: function (el, binding) {
        const regexExp = /#[\w]+(?=\s|$)/g
        const text = el.innerHTML
        const solidText = text.replace(regexExp, function (string) {
            return createAtSignAndHashSignDom(binding, string)
        })
        el.innerHTML = solidText
    }
}

export const linkup = {
    inserted: function (el, binding) {
        const text = el.innerHTML
        const urlRegex = /(https?:\/\/[^\s]+)/g
        const styles = binding.value?.style ? binding.value.style : { color: '#0877e1' };

        const solidText = text.replace(urlRegex, function (url) {
            const createDynamicTag = document.createElement("a")
            createDynamicTag.setAttribute('target', binding.value?.target ? '_blank' : '')
            createDynamicTag.setAttribute('href', url)
            const styleKeys = Object.keys(styles)
            styleKeys.forEach(key => {
                createDynamicTag.style[`${key}`] = styles[key]
            })
            createDynamicTag.innerText = url
            return createDynamicTag.outerHTML
        })
        el.innerHTML = solidText
    }
}

function createAtSignAndHashSignDom(binding, string) {
    const tag = binding.value?.returnType.tag ? binding.value.returnType.tag : 'span';
    const styles = binding.value?.style ? binding.value.style : { color: '#0877e1' };
    const attr = binding.value?.returnType.attr ? binding.value.returnType.attr : {}

    const createDynamicTag = document.createElement(tag)

    const styleKeys = Object.keys(styles)
    styleKeys.forEach(key => {
        createDynamicTag.style[`${key}`] = styles[key]
    })

    const attrKeys = Object.keys(attr)
    attrKeys.forEach(key => {
        createDynamicTag.setAttribute(key, attr[key])
    })

    createDynamicTag.innerText = string
    return createDynamicTag.outerHTML
}
