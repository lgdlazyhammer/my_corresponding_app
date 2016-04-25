/**
 * BIM360 viewer application
 */

// Namespace definition, let's use the definition form LMV
var AutodeskNamespace = function (s) {
    var ns = typeof window !== "undefined" && window !== null ? window : self;

    var parts = s.split('.');
    for (var i = 0; i < parts.length; ++i) {
        ns[parts[i]] = ns[parts[i]] || {};
        ns = ns[parts[i]];
    }

    return ns;
};
AutodeskNamespace("Autodesk.BIM360.Util");

//
//  Autodesk.BIM360.Util
//  Description: Used for load necessary scripts and css
//
(function(Util) {
    'use strict';

    // Extend object
    Util.extend = function(dest) {
        var source = Array.prototype.slice.call(arguments, 1);

        for (var j= 0, len = source.length; j < len; ++j) {
            var src = source[j] || {};
            for (var i in src) {
                if (src.hasOwnProperty(i)) {
                    dest[i] = src[i];
                }
            }
        }

        return dest;
    }

    Util.getOrigin = function() {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + 
                                     "//" + window.location.hostname + 
                                     (window.location.port ? ':' + window.location.port : '');
        }
        return window.location.origin;
    }

    Util.viewingScripts = [ 
        {script: 'viewer3D.min.js', value: 'Autodesk.Viewing.Private'},
        {script: 'three.min.js', value: 'THREE'}
    ];

    Util.viewingCss = ['style.min.css'];

    // Client need to specify the endpoint of viewing service,
    // otherwise assume the origin hosts the viewer.
    Util.viewingService = null;
    Util.fetchViewingServiceByDefault = function () {
        return Util.getOrigin() + "/viewers/";
    }

    Util.ENABLE_DEBUG = false;
    Util.stdOut = function () {
        if (Util.ENABLE_DEBUG) {
            console.log.apply(console, arguments);
        }
    }

    var _isNamespaceDefined = function(s) {
        if (!s) {
            return false;
        }

        var ns = window;

        var parts = s.split('.');
        for (var i = 0; i < parts.length; ++i) {
            if (!ns[parts[i]])
                return false;

            ns = ns[parts[i]];
        }

        return true;
    }

    Util.importCss = function (cssUrl) {

        var ss = document.styleSheets;
        for (var i = 0, len = ss.length; i < len; i++) {
            if (ss[i].href == cssUrl)
                return;
        }

        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = cssUrl;

        document.getElementsByTagName("head")[0].appendChild(link);
    };

    Util.importScripts = function(scriptUrl, scriptValue) {
        if (!Array.isArray(scriptUrl)) {
            return Util.importScript(scriptUrl, scriptValue);
        }

        var pa = scriptUrl.map(function(s, idx) {
            return Util.importScript(s, scriptValue[idx]);
        });

        var v = Promise.all(pa);
        v.cancel = function() {
            pa.forEach(function(p) {
                if (p.cancel) {
                    p.cancel();
                    p.cancel = null;
                }
            });
        };

        return v;
    };

    Util.importScript = function(scriptUrl, scriptValue) {

        if (_isNamespaceDefined(scriptValue)) {
            return Promise.resolve();
        }

        var cancelHandler = null;
        var p = new Promise(function(resolve, reject) {

            var script = document.createElement('script');
            script.type = 'text/javascript';

            // For IE 6&7 use onreadystatechange
            var cancelled = false;
            script.onload = script.onreadystatechange = function() {
                if (cancelled) {
                    return;
                }

                if (!this.readyState ||  this.readyState === "loaded" ||  this.readyState === "complete" ) {

                    // Handle memory leak in IE
                    script.onreadystatechange = null;
                    script.onload = null;

                    resolve();
                }
                else {
                    reject();
                }
            };

            script.onerror = reject;
            script.onabort = reject;
            script.src = scriptUrl;

            // Add script to header
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(script);

            // Make cancel handling
            if (!cancelHandler) {
                cancelHandler = function() {
                    cancelled = true;
                }
            }

        });
        p.cancel = cancelHandler;

        return p;
    }

})(Autodesk.BIM360.Util);

(function() {
    'use strict';

    /**
     * Viewer observer interface.
     */
    Autodesk.BIM360.ViewerObserver = function() {

        /**
         * [onViewerStarted This method is called when Autodesk.BIM360.ViewerApp
         * start successfully. This means the internal lmv viewer is initialized.
         * Usually, this is when client can start to plug customized stuff on 
         * top of viewer, but need in an aysnc way otherwise block viewer loading
         * document]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         */
        this.onViewerStarted = function(viewerApp) {
            throw "ViewerObserver.onViewerStarted, needs implementation.";
        };

        /**
         * [onViewerFailtoStart This method is called when Autodesk.BIM360.ViewerApp
         * fail to start.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         */
        this.onViewerFailtoStart = function(viewerApp) {
            throw "ViewerObserver.onViewerFailtoStart, needs implementation.";
        };

        /**
         * [onViewerStopped This method is called when Autodesk.BIM360.ViewerApp
         * is destroyed. 
         * Usually, this is when client need to clean up any customized stuff
         * on viewer getting destroyed.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         */
        this.onViewerStopped = function(viewerApp) {
            throw "ViewerObserver.onViewerStopped, needs implementation.";
        };

        /**
         * [onDocumentLoading This method is called when a document start to load]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         * @param  {String} The document id
         */
        this.onDocumentLoading = function(viewerApp, docId) {
            throw "ViewerObserver.onDocumentLoading, needs implementation";
        };

        /**
         * [onDocumentLoaded This method is called when Autodesk.BIM360.ViewerApp
         * load document (a bubble manifest) successfully.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         * @param  {Autodesk.Viewing.Document} doc 
         */
        this.onDocumentLoaded = function(viewerApp, doc) {
            throw "ViewerObserver.onDocumentLoaded, needs implementation.";
        };

        /**
         * [onDocumentFailtoLoad This method is called when Autodesk.BIM360.ViewerApp
         * fail to load document (a bubble manifest).]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         * @param  {Object} err contains errorMsg, errorCode, errors
         */
        this.onDocumentFailtoLoad = function(viewerApp, err) {
            throw "ViewerObserver.onDocumentFailtoLoad, needs implementation.";
        };

        /**
         * [onDocumentUnLoaded This method is called when document is unloaded.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp
         */
        this.onDocumentUnLoaded = function(viewerApp) {
            throw "ViewerObserver.onDocumentUnLoaded, needs implementation";
        };

        /**
         * [onItemSelected This method is called when an item from the bubble
         * is selected.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp        
         * @param  {Autodesk.Viewing.Viewer3D/Viewer2D} viewer
         * @param  {Object} item 
         * @param  {Object} viewGeometryItem 
         */
        this.onItemSelected = function(viewerApp, viewer, item, viewGeometryItem) {
            throw "ViewerObserver.onItemSelected, needs implementation.";
        }

        /**
         * [onItemLoaded This method is called when an item from the bubble
         * is loaded.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp        
         * @param  {Autodesk.Viewing.Viewer3D/Viewer2D} viewer
         * @param  {Object} item 
         * @param  {Object} viewGeometryItem 
         */
        this.onItemLoaded = function(viewerApp, viewer, item, messages) {
            throw "ViewerObserver.onItemLoaded, needs implementation.";
        };

        /**
         * [onItemFailtoLoad This method is called when an item from the bubble
         * fail to load.]
         * @param  {Autodesk.BIM360.ViewerApp} viewerApp  
         * @param  {Object} err contains errorMsg, errorCode, errors
         */
        this.onItemFailtoLoad = function(viewerApp, err) {
            throw "ViewerObserver.onItemFailtoLoad, needs implementation.";
        };
    };

})();

(function() {
    'use strict';

    var abu = Autodesk.BIM360.Util;

    /**
     * Internal method to create a viewer application implementation.
     */
    var _createViewApplication = function(containerId, options) {
        var av = Autodesk.Viewing;
        var avv = Autodesk.Viewing.ViewingApplication;
        
        /**
         * BIM360 screen delegate definition
         */
        Autodesk.BIM360.ScreenDelegate = function (viewer) {
            av.ApplicationScreenModeDelegate.call(this, viewer);
        };

        Autodesk.BIM360.ScreenDelegate.prototype = Object.create(av.ApplicationScreenModeDelegate.prototype);
        Autodesk.BIM360.ScreenDelegate.prototype.constructor = Autodesk.BIM360.ScreenDelegate;

        /**
         * Called after the screen mode changes
         * Since we need switch between leaflet and lmv viewer in BIMViewer 
         * set viewer parent container as full screen.
         */
        Autodesk.BIM360.ScreenDelegate.prototype.doScreenModeChange = function (oldMode, newMode) {
            var container = document.getElementById(containerId);
            if (newMode === av.ScreenMode.kNormal) {
                container.classList.remove('viewer-fill-browser');
                exitFullscreen();
            } else if (newMode === av.ScreenMode.kFullScreen) {
                container.classList.add('viewer-fill-browser');
                launchFullscreen(container);
            }
        };

        // Create BIM360 application
        Autodesk.BIM360.ViewerAppImpl = function(elementId, options) {
            avv.call(this, elementId, options);
        };

        Autodesk.BIM360.ViewerAppImpl.prototype = Object.create(avv.prototype);

        Autodesk.BIM360.ViewerAppImpl.prototype.loadDocumentbyId = function(documentId) {

            // Only use acm namespace if there is one.
            var accessControlProperties = undefined;
            if (this.options.acmNamespace) {
                accessControlProperties = {
                    'x-ads-acm-namespace' : this.options.acmNamespace,
                    'x-ads-acm-check-groups' : 'true',
                    'oauth2AccessToken': this.options.accessToken
                };
            }

            var cancelled = false;
            var self = this;
            var p = new Promise(function(resolve, reject) {
                self.loadDocument(documentId, function(doc, errorsandwarnings) {
                    if (cancelled) {
                        abu.stdOut("Load Document Cancelled: Complete.");
                        return;
                    }

                    resolve(doc);
                }, 
                function(errorCode, errorMsg, errors) {
                    reject({
                        errorMsg: errorMsg,
                        errorCode: errorCode,
                        errors: errors
                    });
                }, 
                accessControlProperties);
            });
            p.cancel = function() {
                cancelled = true;
            }

            return p;
        };

        Autodesk.BIM360.ViewerAppImpl.prototype.loadItem = function(doc, itemId, objectIds) {

            var cancelled = false;
            var self = this;
            var p = new Promise(function(resolve, reject) {

                function itemLoaded(viewer, item, messages) {
                    if (cancelled) {
                        // If cancelled explicitly, unload the model
                        self.unloadModel();
                        abu.stdOut("Load Item Cancelled: Complete.");
                        return;
                    }

                    resolve({
                        viewer: viewer, 
                        item: item, 
                        messages: messages});
                }
                function itemFailedLoad(errorCode, errorMsg, errors) {
                    reject({
                        errorMsg: errorMsg,
                        errorCode: errorCode,
                        errors: errors
                    });
                }

                var geometryItems = [];
                if(itemId) {
                    geometryItems = av.Document.getSubItemsWithProperties(
                        doc.getRootItem(), 
                        {'guid':itemId}, 
                        true);
                } else {
                    geometryItems = av.Document.getSubItemsWithProperties(
                        doc.getRootItem(), 
                        {'type':'geometry'}, 
                        true);
                }
                if(geometryItems.length > 0) {
                    self.selectItem(geometryItems[0], itemLoaded, itemFailedLoad, objectIds);
                }       
            });
            p.cancel = function() {
                cancelled = true;
            }

            return p;
        }

        Autodesk.BIM360.ViewerAppImpl.prototype.unloadModel = function() {
            var viewer =  this.getCurrentViewer();
            if (viewer) {
                viewer.impl.unloadCurrentModel();
            }
        }

        Autodesk.BIM360.ViewerAppImpl.prototype.selectItem = function(item, onItemSelectedCallback, onItemFailedToSelectCallback, objectIds) {

            // If select item return false, then it fails to either return success or error,
            // that we need to handle that explicitly.
            if (!avv.prototype.selectItem.call(
                this, 
                item, 
                onItemSelectedCallback, 
                onItemFailedToSelectCallback, 
                objectIds
                ))
            {
                // Explicitly make it clear that only geometry or view can be selected for viewing.
                onItemFailedToSelectCallback(0, "Failed to select item.");
            }
        };

        Autodesk.BIM360.ViewerAppImpl.prototype.dtor = function() {
            // Exit full screen mode.
            var bimViewer = this.getCurrentViewer();
            if(bimViewer && bimViewer.getScreenMode() !== Autodesk.Viewing.ScreenMode.kNormal) {
                bimViewer.setScreenMode(Autodesk.Viewing.ScreenMode.kNormal);
            }
            // Destruct viewer app
            this.myRegisteredViewers = {};
            this.setCurrentViewer(null);
            this.selectedItem = null;
            this.myDocument = null;

            this.itemSelectedObservers = [];

        }

        // Customize screen mode delegate, apply full screen on the container id,
        // then this will work for both 3D and 2D viewer.
        if (!options.screenModeDelegate) {
            options.screenModeDelegate = Autodesk.BIM360.ScreenDelegate;
        }

        return new Autodesk.BIM360.ViewerAppImpl(containerId, options);
    };

    /**
     * Inernal viewer observer implementation for debug purpose.
     */
    var _internalViewerObserver = function() {

        this.onViewerStarted = function(viewerApp) {
            abu.stdOut("Viewer " + viewerApp.id + ": Started.");
        };

        this.onViewerFailtoStart = function(viewerApp) {
            abu.stdOut("Viewer " + viewerApp.id + ": Fail to Start.");
        };

        this.onViewerStopped = function(viewerApp) {
            abu.stdOut("Viewer " + viewerApp.id + ": Stopped.");
        }

        this.onDocumentLoaded = function(viewerApp, doc) {
            abu.stdOut("Viewer " + viewerApp.id + ": Document Loaded, " + doc.myPath);
        };

        this.onDocumentFailtoLoad = function(viewerApp, err) {
            abu.stdOut("Viewer " + viewerApp.id + ": Document Fail to Load.");
            abu.stdOut(JSON.stringify(err));
        };

        this.onDocumentUnLoaded = function(viewerApp) {
            abu.stdOut("Viewer " + viewerApp.id + ": Document unLoaded.");
        }

        this.onItemSelected = function(viewerApp, viewer, item, viewGeometryItem) {
            abu.stdOut("Viewer " + viewerApp.id + ": Item Selected, " + item.name);

            // Once one item get loaded, re-configure viewer for
            // BIM360 usage before rendering.
            // This will let viewer to restore some settings each time
            // a new item loaded.
            //
            // The changes include,
            // * make zoom direction is consistent with AEC usage
            // * disable ambient shadow by default.
            // * disable ground shandow and reflection by default.
            // * optimize navigation which will disable anti-alise when navigation.
            viewer.navigation.setReverseZoomDirection(true);
            if (item.role === "3d") {
                viewer.setQualityLevel(false, true);
                viewer.setGroundShadow(false);
                viewer.setGroundReflection(false);
                viewer.setOptimizeNavigation(true);
            }
        };

        this.onItemLoaded = function(viewerApp, viewer, item, messages) {
            abu.stdOut("Viewer " + viewerApp.id + ": Item Loaded, " + item.name);
        };

        this.onItemFailtoLoad = function(viewerApp, err) {
            abu.stdOut("Viewer " + viewerApp.id + ": Item Fail to Load.");
            abu.stdOut(JSON.stringify(err));
        };

    }

    /**
     * ViewerApp definition
     */
    Autodesk.BIM360.ViewerApp = function () {

        // Options for viewer, by default it comes with the following values.
        // Can be extended when running.
        this.viewerOptions = {
            bimViewer: true,
            shouldInitializeAuth: true,
            enableGUI: true,
            kThumbnailHeight: 200,
            kThumbnailWidth: 200,
            documentId: null,
            accessToken: null,
            refreshToken: null,
            screenModeDelegate: null,
        };

        this.viewerAppImpl = null;
        // Add a default viewer observer.
        this.viewerObservers = [new _internalViewerObserver()];
    };

    Autodesk.BIM360.ViewerApp.prototype.notify = function(event) {
        var args = [this];
        for (var i=1; i<arguments.length; ++i) {
            args.push(arguments[i]);
        }

        // Notify registered observers from back to front,
        // in case observers may get removed on reacting viewer stopped events.
        var len = this.viewerObservers.length;
        for (var j=len-1; j>=0; --j) {
            var observer = this.viewerObservers[j];

            var method = "on" + event;
            try {
                if (method in observer) {
                    observer[method].apply(observer, args);
                }
            }
            catch (err) {
                abu.stdOut("Observe Failed on " + event);
                abu.stdOut('  error: ' + err.message);
                console.error('  stack:\n' + err.stack);
            }            
        }

    };

    Autodesk.BIM360.ViewerApp.prototype.addViewerObserver = function(ob) {
        this.viewerObservers.push(ob);
    };

    Autodesk.BIM360.ViewerApp.prototype.removeViewerObserver = function(ob) {
        var idx = this.viewerObservers.indexOf(ob);
        idx > -1 && this.viewerObservers.splice(idx, 1);
    };

    Autodesk.BIM360.ViewerApp.prototype._setCurPromise = function(p, name) {
        this.curP = p;
        this.curP.name = name;
        return this.curP;
    }

    Autodesk.BIM360.ViewerApp.prototype._cancelCurPromise = function() {
        if (this.curP && typeof this.curP.cancel == "function") {
            this.curP.cancel();
            this.curP.cancel = null;
            this.curP = null;
        }
    }

    Autodesk.BIM360.ViewerApp.prototype.loadDocumentbyId = function(documentId) {
        if (!this.viewerAppImpl) {
            return undefined;
        }

        var self = this;
        var docP = this.viewerAppImpl.loadDocumentbyId(documentId);
        var p = docP.then(
            function(doc) {
                self.notify("DocumentLoaded", doc);
                return Promise.resolve(doc);
            }, 
            function(err) {
                self.notify("DocumentFailtoLoad", err);
                return Promise.reject(err);
            }
        );
        p.cancel = docP.cancel;
        this.notify("DocumentLoading", documentId);

        return this._setCurPromise(p, "loadDocumentbyId");
    };

    Autodesk.BIM360.ViewerApp.prototype.loadItem = function(doc, itemId, objectIds) {
        if (!this.viewerAppImpl) {
            return undefined;
        }

        var self = this;
        var itemP = this.viewerAppImpl.loadItem(doc, itemId, objectIds);
        var p = itemP.then(
            function(it) {
                self.notify("ItemLoaded", it.viewer, it.item, it.messages);
                return Promise.resolve(it);
            },
            function(err) {
                self.notify("ItemFailtoLoad", err);
                return Promise.reject(err);
            }
        );
        p.cancel = itemP.cancel;

        return this._setCurPromise(p, "loadItem");
    };

    Autodesk.BIM360.ViewerApp.prototype.loadDocumentAndItem = function(documentId, itemId, objectIds) {
        if (!this.viewerAppImpl) {
            return undefined;
        }

        var self = this;
        var itemP = null;
        var cancelled = false;
        var docP = this.loadDocumentbyId(documentId);
        var p = docP.then(function(doc) {
            if (cancelled) {
                return;
            }

            return self.loadItem(doc, itemId, objectIds).then(function(it) {
                if (cancelled) {
                    return;
                }

                return Promise.resolve(it);
            }, 
            function(err) {
                return Promise.reject(err);
            });
        }, 
        function(err) {
            return Promise.reject(err);
        });

        p.cancel = function() {
            cancelled = true;
            if (typeof docP.cancel == "function") {
                docP.cancel();
                docP.cancel = null;
            }
            if (itemP && typeof itemP.cancel == "function") {
                itemP.cancel();
                itemP.cancel = null;
            }
        }

        return this._setCurPromise(p, "loadDocumentAndItem");
    };

    Autodesk.BIM360.ViewerApp.prototype.unloadDocument = function() {
        this._cancelCurPromise();
        if (this.viewerAppImpl) {
            this.viewerAppImpl.unloadModel();
            // clear the data in viewer app
            this.viewerAppImpl.myDocument = null;
            this.viewerAppImpl.urn = null;
            this.viewerAppImpl.selectedItem = null;
        }
        this.notify("DocumentUnLoaded");
    };

    Autodesk.BIM360.ViewerApp.prototype.start = function(options) {
        if(this.isRunning)
            return Promise.resolve(this);

        this.isRunning = true;

        // Extend viewer options
        Autodesk.BIM360.Util.extend(this.viewerOptions, options);

        var cancelHandler = null;
        var self = this;
        var p = new Promise(function(resolve, reject) {

            // If initialize can't return successfully in a given time,
            // then consider its failed.
            // Initializer should really take an on-failure callback.

            cancelHandler = function() {
                self.isRunning = false;
            };
            var id = setTimeout(cancelHandler, 30000);

            // In LMV code, tokenRefreshInterval property have not been set to null
            // when viewer init, viewer can't work when user reopen viewer.
            // So set it to null in DM side.
            Autodesk.Viewing.Private.token.tokenRefreshInterval = null;
            
            Autodesk.Viewing.Initializer(self.viewerOptions, function(){

                clearTimeout(id);

                if (!self.isRunning) {
                    abu.stdOut("Cancel Viewer Start: Complete.");
                    return;
                }

                self.isRunning = self.onStart();
                if (self.isRunning) {
                    self.notify("ViewerStarted", self);
                    resolve(self)
                }
                else {
                    self.notify("ViewerFailtoStart");
                    reject(null);
                }

            });

        });
        p.cancel = cancelHandler;

        return this._setCurPromise(p, "start");
    };

    Autodesk.BIM360.ViewerApp.prototype.onStart = function() {

        // Have to get a valid viewer container so as to continue
        var container = this.viewerOptions.bimviewerContainer;
        if (!container) {
            return false;
        }

        this.viewerAppImpl = _createViewApplication(container, this.viewerOptions);

        if (this.viewerOptions.enableGUI) {
            Autodesk.Viewing.Private.GuiViewer3D && this.viewerAppImpl.registerViewer(
                this.viewerAppImpl.k3D,
                Autodesk.Viewing.Private.GuiViewer3D,
                this.viewerOptions);

            Autodesk.Viewing.Private.GuiViewer2D && this.viewerAppImpl.registerViewer(
                this.viewerAppImpl.kRaster,
                Autodesk.Viewing.Private.GuiViewer2D,
                this.viewerOptions);            
        }
        else {
            Autodesk.Viewing.Viewer3D && this.viewerAppImpl.registerViewer(
                this.viewerAppImpl.k3D,
                Autodesk.Viewing.Viewer3D, 
                this.viewerOptions);

            Autodesk.Viewing.Viewer2D && this.viewerAppImpl.registerViewer(
                this.viewerAppImpl.kRaster,
                Autodesk.Viewing.Viewer2D, 
                this.viewerOptions);
        }

        // this is to hook up internal viewer's item selected event
        // 
        var self = this;
        var _hookItemSelected = function() {
            this.onItemSelected = function(viewer, item, viewGeometryItem) {
                self.notify("ItemSelected", viewer, item, viewGeometryItem);
            }
        }
        this.viewerAppImpl.addItemSelectedObserver(new _hookItemSelected());

        return true;
    }

    Autodesk.BIM360.ViewerApp.prototype.stop = function() {
        this.isRunning = false;
        // Cancel current promise
        this._cancelCurPromise();

        // Destroy viewer app implementation
        this.viewerAppImpl && this.viewerAppImpl.dtor();
        this.viewerAppImpl = null;

        // Notify viewer stopped.
        this.notify("ViewerStopped", this);

        // Clear viewer observers
        this.viewerObservers = [];
    };



    /**
     * BIM360 viewer factory that can create and destroy viewerApp.
     */
    Autodesk.BIM360.ViewerFactory = (function() {

        // Record how many viewers are still in use.
        var _viewerCounter = 0;
        var _viewerId = 0;

        var _createViewer = function(env) {

            // If viewing service endpoint not specify explicitly,
            // set it from origin
            if (!abu.viewingService) {
                abu.viewingService = abu.fetchViewingServiceByDefault();
            }

            // An array of promise
            var pa = abu.viewingScripts.map(function(s) {
                return abu.importScript(abu.viewingService + s.script, s.value);
            });

            var v = Promise.all(pa)
                        .then(function() {
                            
                            // Import any style
                            abu.viewingCss.forEach(function(l) {
                                abu.importCss(abu.viewingService + l);
                            });

                            // Then, viewer is being created successfully.
                            var viewer = new Autodesk.BIM360.ViewerApp();
                            _viewerCounter++;
                            viewer.id = _viewerId++;

                            // Refer to the viewer
                            v.viewer = viewer;
                            return Promise.resolve(viewer);

                        }, function() {
                            abu.stdOut("Create viewer failed.");
                            return Promise.reject();
                        });
            v.cancel = function() {
                pa.forEach(function(p) {
                    if (p.cancel) {
                        p.cancel();
                        p.cancel = null;
                    }
                });
            };

            return v;
        };

        var _destroyViewer = function(viewerPromise) {
            if (!viewerPromise) {
                return;
            }

            if (typeof viewerPromise.cancel == "function") {
                viewerPromise.cancel();
            }

            var viewer = viewerPromise.viewer;
            if (viewer) {
                viewer.stop();
                _viewerCounter--;
                viewerPromise.viwer = null;
            }

        };

        var _liveViewerCount = function() {
            return _viewerCounter;
        }

        return {
            CreateViewer:       _createViewer,
            DestroyViewer:      _destroyViewer,
            LiveViewerCount:    _liveViewerCount
        };

    })();

})();
;// View panel implementation.
// 
// ??? The tree was already built a few month ago by a straight forward way, 
// ??? which can be brought back quickly. But, this can be rebuilt in a more
// ??? react way.
// ??? So, view model tree is another tech debt to re-think later.

(function() {
	'use strict';

	var namespace = AutodeskNamespace('Autodesk.BIM360.Views');

	var SheetPanel = function(viewerApp) {
		this.viewerApp = viewerApp;
		this.viewerApp.addViewerObserver(this);
	};

	var proto = SheetPanel.prototype;
	proto.constructor = SheetPanel;

	proto.intialize = function(viewerDoc, parentContainer) {
		
		// The parent container to hold document view
		if (typeof parentContainer === "string") {
			this.parentContainer = document.getElementById(parentContainer);
		}
		else {
			this.parentContainer = parentContainer;
		}
		
		if (!parentContainer) {
			return false;
		}

		// Create a tree container
		this.treeContainer = document.createElement('div');
        this.treeContainer.classList.add('bim_tree');
        this.parentContainer.appendChild(this.treeContainer);

		this.viewerDoc = undefined;
		this.reset(viewerDoc);

		return true;
	};

	proto.reset = function(viewerDoc) {
		// Document change, then reset the document view list tree.
		if (this.viewerDoc == viewerDoc) {
			return;
		}

		this.viewerDoc = viewerDoc;
		this._destroyTree();

		// Build tree by given document.
		try {

			this.tree2D = null;
			this.tree3D = null;
			this.currentItem = null;
			this._buildTree(this.viewerApp, this.viewerDoc, this.treeContainer);
		}
		catch (e) {
			console.error("Faile to build sheet list.");
			console.error("error: " + e.message);
		}
	};

	proto.terminate = function() {
		this.viewerDoc = null;
		this.currentItem = null;

		if (this.treeContainer) {
			this.treeContainer.parentNode.removeChild(this.treeContainer);
			this.treeContainer = null;
		}

		this.parentContainer = null;
		this._destroyTree();
	};

	// This is to build the tree given the bubbles.
	proto._buildTree = function(viewerApp, viewerDoc, treeContainer) {
		var self = this;
		
		// This is only available when lmv is loaded.
		var av = Autodesk.Viewing;
		var avu = Autodesk.Viewing.UI;
		var avd = Autodesk.Viewing.Document;

		var _createTreeDelegate = function() {

			var treeDelegate = new avu.TreeDelegate();
	        treeDelegate.getTreeNodeId = function(node) {
	            return node.guid;
	        };

	        treeDelegate.getTreeNodeLabel = function(node) {
	            return node.name || 'Unnamed ' + node.type;
	        };

	        treeDelegate.getTreeNodeClass = function(node) {
	            return node.type === 'geometry' ? node.type + '_' + node.role : node.type;
	        };

	        treeDelegate.isTreeNodeGroup = function(node) {
	            return node.type === 'folder' || 
	            	   node.type === 'design' || 
	            	   (1 < viewerDoc.getNumViews(node));
	        };

	        treeDelegate.shouldCreateTreeNode = function(node) {
	            return node.type !== 'resource';
	        };

	        treeDelegate.onTreeNodeClick = function(tree, node, event) {
	        	if (self.currentItem == node) {
	        		// Click on the exact same node, nothing should happen again.
	        		return;
	        	}

	        	// If no guid, it means a folder.
                if (node.guid) {
                    viewerApp.loadItem(viewerDoc, node.guid);
                }
                else {
                    self.onItemSelected(viewerApp, null, node, null);
                }
	        };

	        treeDelegate.createTreeNode = function(node, parent, options) {

	            var label = document.createElement('label');
	            label.setAttribute('class', 'viewer_sheet_name_label');
	            parent.appendChild(label);

	            var text = this.getTreeNodeLabel(node);
	            label.textContent = text;
	            label.hasThumbnail = false;

                var icon = parent.getElementsByTagName('icon');
                if (icon[0]) {
                    if (this.isTreeNodeGroup(node)) {
                        icon[0].classList.add('bimviewericon-dropdown_arrow');
                    }
                    else {
                        icon[0].classList.add('bimviewericon-viewpoint');
                    }
                }

	        };

	        return treeDelegate;
		};

		if (!viewerApp || !viewerDoc || !treeContainer) {
			return false;
		}

		var viewableItems = avd.getSubItemsWithProperties(viewerDoc.getRootItem(), {
			'type':'folder',
			'role':'viewable'}, 
			true);

		if (viewableItems.length == 0) {
			return false;
		}

        var get2Dand3DChildren = function(root, container_2d, container_3d){
            var len = root.children?root.children.length:0;
            for (var i=0; i < len; i++) {
                var child = root.children[i];
                if (child.role === "2d")
                    container_2d.push(child);
                else if (child.role === "3d")
                    container_3d.push(child);
                else if (child.type === "folder" || child.type === "design")
                    get2Dand3DChildren(child, container_2d, container_3d);
            }
        };

        var container_2d = {};
        var container_3d = {};
        container_3d.children = [];
        container_2d.children = [];
        container_2d.type = "folder";
        container_2d.name = Autodesk.Viewing.i18n.translate("2D sheets");
        container_2d.role = "2d";
        container_3d.type = "folder";
        container_3d.name = Autodesk.Viewing.i18n.translate("3D views");
        container_3d.role = "3d";

        var treeNode = get2Dand3DChildren(viewableItems[0], 
        	container_2d.children, 
        	container_3d.children);

        // Both 2d/3d tree use the common delegate ??? 
        var treeDelegate = _createTreeDelegate();
        if (container_3d.children.length > 0) {
            var tree = new avu.Tree(treeDelegate, container_3d, treeContainer, {});
            tree.setAllCollapsed(true);
            tree.show(true);
            this.tree3D = tree;
        }

        if (container_2d.children.length > 0) {
            var tree = new avu.Tree(treeDelegate, container_2d, treeContainer, {});
            tree.setAllCollapsed(true);
            tree.show(true);
            this.tree2D = tree;
        }

        return true;
	};

	proto._destroyTree = function() {
		if (this.tree2D) {
			this.tree2D.clear();
            this.tree2D = null;
		}

		if (this.tree3D) {
            this.tree3D.clear();
            this.tree3D = null;
		}
	};

	// This is to be notified when an item get selected.
	proto.onItemSelected = function(viewerApp, viewer, item, viewGeometryItem) {
		if (item.type === "folder" ||
			item.type === "design") {
            // collapsed if select a parent node.
			this._setCollapsed(item);
		}
		else {
            if (item.role == '2d') {
                this.tree2D.setCollapsed(true);
                this._scrollToItem(this.tree2D, item);
            }
            else {
                this.tree3D.setCollapsed(true);
                this._scrollToItem(this.tree3D, item);
            }

            this._selectTreeItem(this.tree2D, item);
            this._selectTreeItem(this.tree3D, item);

            this.currentItem = item;
        }
	};

	// Operations to control the trees
	// 
	proto._scrollToItem = function(tree, item) {
        if (tree) {
            var elem = tree.getElementForNode(item);

            if (elem) {
                var total = elem.offsetTop;
                elem = elem.parentNode;
                while (elem && elem != tree.myRootContainer) {
                    total += elem.offsetTop;
                    elem = elem.parentNode;
                }

                tree.myRootContainer.parentNode.scrollTop = total > 30 ? total - 30 : total;
            }
        }
	}

	proto._selectTreeItem = function(tree, item) {

		// TODO: this should modify some styles.
		if (!tree) {
			return;
		}

		var del = tree.delegate();

        // remove the pre-selection.
        // the pre-selection would be removed in one tree. While in our scenario, two trees exist
        // - the tree2D and tree3D, so we have to remove the pre-selection if it's in a different tree.
        var pre_selection = this.currentItem;
        if (pre_selection) {
            var ele = tree.getElementForNode(pre_selection);
            ele && ele.classList.remove('selected');
        }

		var nodeId = del.getTreeNodeId(item);
		if (tree.getElementForNode(item)) {
			tree.setSelection([nodeId]);
		}
	};

    proto._setCollapsed = function(item) {

        if (this.tree2D && item.role == '2d')
            this.tree2D.setCollapsed(item, !this.tree2D.isCollapsed(item));
        if (this.tree3D && item.role == '3d')
            this.tree3D.setCollapsed(item, !this.tree3D.isCollapsed(item));
	};


	namespace.SheetPanel = SheetPanel;

})();